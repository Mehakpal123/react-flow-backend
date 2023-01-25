const Article = require('../models/Article/ArticleDAO');
const { sendSuccessResponse, sendErrorResponse } = require('../common/common');

exports.createArticle = (req, res) => {
	Article.create(req.body, (err, { code, message, data }) => {
		if (err) return sendErrorResponse(false, res, err, false);
		return sendSuccessResponse(res, code, message, data, true);
	})
};

exports.getAllArticles = (req, res) => {
	Article.getAll(({ status, code, message, data }) => {
		if (!status) return sendErrorResponse(false, res, data);
		return sendSuccessResponse(res, code, message, data, true);
	});
}

exports.deleteArticle = (req, res) => {
	Article.deleteArticle(req.body.article, ({ status, code, message, data }) => {
		if (!status) return sendErrorResponse(false, res, data);
		return sendSuccessResponse(res, code, message, data, true);
	})
}
