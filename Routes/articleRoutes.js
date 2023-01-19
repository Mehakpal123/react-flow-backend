const { createArticle, getAllArticles, deleteArticle } = require('../controllers/ArticleContoller');
const { isAuthorized } = require('../config/middleware');

module.exports = function (app) {
	app.post('/create-article', isAuthorized, createArticle);
	app.get('/get-all-articles', getAllArticles);
	app.post('/delete-article', deleteArticle);
}
