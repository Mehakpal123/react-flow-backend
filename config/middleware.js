const jwt = require('jsonwebtoken');
const { sendAuthInvalidResponse } = require('../common/common');
const { AuthTokenNotPresent, AuthTokenIllegal } = require('../common/responseMessage');

module.exports.isAuthorized = function (req, res, next) {
	// Bearer Token
	const rawToken = req.headers.authorization ? req.headers.authorization.split(' ')[1] : false;

	if (!rawToken) {
		return sendAuthInvalidResponse(res, next, AuthTokenNotPresent.code, AuthTokenNotPresent.message, false);
	}

	// verify and return token
	jwt.verify(rawToken, process.env.SECRET_KEY, (err, token) => {
		if (err) return sendAuthInvalidResponse(res, next, AuthTokenNotPresent.code, AuthTokenNotPresent.message, false);

		// set the token to the requested object
		req.body.user = token.id;
		next();
	});
}
