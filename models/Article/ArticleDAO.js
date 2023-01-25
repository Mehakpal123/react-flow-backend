const mongoose = require('mongoose'),
	ArticleSchema = require('./ArticleSchema'),
	{ ArticleCreated, UnknownErrorOccured, FoundAllArticles, ArticleDeleted, ArticleDeletedFail } = require('../../common/responseMessage');

ArticleSchema.statics = {
	create: function (data, cb) {
		const article = new this(data);
		resData = ArticleSchema.statics.prepareResponseData(false, ArticleCreated.code, ArticleCreated.message, data);
		article.save((err, data) => cb(err, resData));
	},
	getAll: function (cb) {
		let resData;
		this.find((err, data) => {
			if (err) {
				resData = ArticleSchema.statics.prepareResponseData(false, UnknownErrorOccured.code, UnknownErrorOccured.message, err);
			}
			else {
				resData = ArticleSchema.statics.prepareResponseData(true, FoundAllArticles.code, FoundAllArticles.message, data);
			}

			return cb(resData);
		});
	},
	deleteArticle: function (id, cb) {
		let resData;
		this.findByIdAndDelete(id, (err, data) => {
			if (err) {
				resData = ArticleSchema.statics.prepareResponseData(false, UnknownErrorOccured.code, UnknownErrorOccured.message, err);
			}
			else {
				if (data) {
					resData = ArticleSchema.statics.prepareResponseData(true, ArticleDeleted.code, ArticleDeleted.message, data);
				}
				else {
					resData = ArticleSchema.statics.prepareResponseData(true, ArticleDeletedFail.code, ArticleDeletedFail.message, {});
				}
			}
			return cb(resData);
		})
	},
	prepareResponseData: (status, code, message, data) => ({ status, code, message, data })
}


const ArticleModel = mongoose.model('Articles', ArticleSchema);
module.exports = ArticleModel;
