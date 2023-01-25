
exports.sendSuccessResponse = (res, resCode, message, data, status) => res.cookie('locale', 'India', {
	httpOnly: true,
	domain: 'localhost',
	sameSite: true,
}).status(200).json({ status, resCode, message, data })


exports.sendErrorResponse = (res, data, status) => res.status(500).json({ status, error: data });


exports.sendAuthInvalidResponse = (res, next, code, message, status) => res.status(403).json({ error: { status, code, message } })  
