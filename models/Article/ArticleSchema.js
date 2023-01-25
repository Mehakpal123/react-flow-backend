const mongoose = require('mongoose');
const { Schema } = mongoose;

const ArticleSchema = new Schema({
	title: { type: String, lowercase: true, required: [true, "can't be blank"], index: true },
	content: String,
	date: {
		type: Date,
		default: Date.now
	},
	user: Schema.Types.ObjectId
}, { timestamps: true });

module.exports = ArticleSchema;
