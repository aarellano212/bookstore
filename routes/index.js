var express = require('express');
var router = express.Router();
const bookController = require('../controllers/bookController.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/books', bookController.viewAll);
router.get('/books/profile/:id', bookController.viewProfile);
router.get('/books/edit/:id', bookController.renderEditForm);
router.post('/books/edit/:id', bookController.updateBook);
router.get('/books/add', bookController.renderAddForm);
module.exports = router;
