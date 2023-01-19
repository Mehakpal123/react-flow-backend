const User = require('../models/User/UserDAO');
const { sendErrorResponse, sendSuccessResponse } = require('../common/common');

exports.signup = (req, res) => {
	const userData = req.body;
	User.signup(userData, (err, { code, message, data, status }) => {
		if (err) return sendErrorResponse(false, res, err, false);
		return sendSuccessResponse(res, code, message, data, status);
	})
}

exports.login = (req, res) => {
	const userData = req.body;
	User.login(userData, (err, { code, message, data, status }) => {
		if (err) return sendErrorResponse(false, res, err, false);
		return sendSuccessResponse(res, code, message, data, status, true);
	});
}
