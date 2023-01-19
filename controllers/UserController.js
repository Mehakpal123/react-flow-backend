const User = require('../models/User/UserDAO');
const { sendErrorResponse, sendSuccessResponse } = require('../common/common');

exports.signup = (req, res) => {
	const userData = req.body;
	User.signup(userData, (err, { code, message, data }) => {
		if (err) return sendErrorResponse(res, err);
		return sendSuccessResponse(res, code, message, data);
	})
}

exports.login = (req, res) => {
	userData = req.body;
	User.login(userData, (err, data) => {
		if (err) return sendErrorResponse(res, err);
		return sendSuccessResponse(res, data.code, data.message, data.data);
	});
}

exports.get_flow_data = (req, res) => {
	return res.json({
		"nodes": [
			{
				"id": "1",
				"type": "MobileClient",
				"data": {
					"label": "Customer"
				},
				"label": "Customer"
			},
			{
				"id": "2",
				"type": "input",
				"data": {
					"label": "Client data layer"
				}
			},
			{
				"id": "2a",
				"type": "default",
				"parentNode": "2",
				"data": {
					"label": "Greengrass lambda"
				}
			},
			{
				"id": "2b",
				"type": "DB",
				"parentNode": "2",
				"data": {
					"label": "Storage engine"
				}
			},
			{
				"id": "3",
				"type": "AWSCloud",
				"data": {
					"label": "AWS cloud"
				}
			},
			{
				"id": "3a",
				"type": "APIGateway",
				"parentNode": "3",
				"data": {
					"label": "API gateway"
				}
			},
			{
				"id": "3b",
				"type": "default",
				"parentNode": "3",
				"data": {
					"label": "AWS EC2"
				}
			},
			{
				"id": "3c",
				"type": "S3",
				"parentNode": "3",
				"data": {
					"label": "Object storage"
				}
			}
		],
		"edges": [
			{
				"id": "e1-2a",
				"source": "1",
				"target": "2a",
				"data": {
					"label": "API call"
				},
			},
			{
				"id": "e2a-2b",
				"source": "2a",
				"target": "2b",
				"data": {
					"label": "API call"
				},
			},
			{
				"id": "e2a-3a",
				"source": "2a",
				"target": "3a",
				"data": {
					"label": "Call backend"
				},
			},
			{
				"id": "e3a-3b",
				"source": "3a",
				"target": "3b",
				"data": {
					"label": "Make computation"
				},
			},
			{
				"id": "3b-3c",
				"source": "3b",
				"target": "3c",
				"data": {
					"label": "Write to S3"
				},
			}
		]
	});
};
