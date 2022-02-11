const {Book} = require('../models')
const genres = ['Modernist', 'Southern Gothic Bildungsroman', 'Biography', 'Autobiography', 'Jewish literature']

//view all
module.exports.viewAll = async function(req, res) {
    const books = await Book.findAll();
    res.render('book/view_all', {books});
}

//profile
module.exports.viewprofile = async function(req, res) {
    const books = await Book.findByPl(req.params.id);
    res.render('books/profile', {books});
}

//render add form
module.exports.renderAddForm = function(req, res) {
    const books ={
        title: '',
        author: '',
        publisher: '',
        genre: genres[0],
        pages: '',
        description: ''
    }
    res.render('books/add', {books, genres})
}

//add

//render edit form
module.exports.renderEditForm = async function(req, res) {
    const books = await Book.findByPk(req.params.id);
    res.render('books/edit', {books, genres});
}

//update
module.exports.updateBook = async function(req, res) {
    const books = await Book.update({
        title: req.body.title,
        author: req.body.author,
        publisher: req.body.publisher,
        genre: req.body.genre,
        pages: req.body.pages,
        description: req.body.description
    }, {
    where: {
        id: req.params.id
    }
    });
    res.redirect(`/books/profile/${req.params.id}`);
}

//delete