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
		nodes: [
			{
				id: '1',
				type: 'MobileClient',
				data: {
					'label': 'Client',
					'handles': [
						{ id: 'right_mobile_client', type: 'source', position: 'right' },
					]
				},
			},
			// {
			// 	id: '2',
			// 	type: 'input',
			// 	data: {
			// 		'label': 'Client data layer'
			// 	},
			// },
			{
				id: '2a',
				type: 'LambdaFunction',
				// parentNode: '2',
				extent: 'parent',
				target: 'right',
				data: {
					label: 'Greengrass lambda',
					handles: [
						{ id: 'top_lambda', type: 'target', position: 'left' },
						{ id: 'bottom_lambda', type: 'source', position: 'bottom' },
						{ id: 'right_lambda', type: 'source', position: 'right' },
					],
				}
			},
			{
				id: '2b',
				type: 'DB',
				appearUnder: '2a',
				// parentNode: '2',
				extent: 'parent',
				data: {
					label: 'Storage engine',
					'handles': [
						{ id: 'top_storage_engine', type: 'target', position: 'top' },
					]
				}
			},
			// {
			// 	id: '3',
			// 	type: 'AWSCloud',
			// 	data: {
			// 		label: 'AWS cloud'
			// 	},
			// },
			{
				id: '3a',
				type: 'APIGateway',
				// parentNode: '3',
				extent: 'parent',
				data: {
					label: 'API gateway',
					'handles': [
						{ id: 'left_api_gateway', type: 'target', position: 'left' },
						{ id: 'right_api_gateway', type: 'source', position: 'right' },
					]
				}
			},
			{
				id: '3b',
				type: 'EC2',
				// parentNode: '3',
				extent: 'parent',
				data: {
					label: 'AWS EC2',
					'handles': [
						{ id: 'left_api_gateway', type: 'target', position: 'left' },
						{ id: 'right_api_gateway', type: 'source', position: 'right' },
					]
				}
			},
			{
				id: '3c',
				type: 'S3',
				// parentNode: '3',
				extent: 'parent',
				data: {
					label: 'Object storage',
					'handles': [
						{ id: 'left_s3', type: 'target', position: 'left' },
					]
				}
			}
		],
		edges: [
			{
				id: 'e1-2a',
				source: '1',
				target: '2a',
				type: 'straight',
				data: {
					label: 'API call'
				},
			},
			{
				id: 'e2a-2b',
				source: '2a',
				target: '2b',
				type: 'straight',
				data: {
					'label': 'Store Data'
				},
			},
			{
				id: 'e2a-3a',
				source: '2a',
				sourceHandle: 'right_lambda',
				target: '3a',
				type: 'straight',
				data: {
					sourcePosition: 'right',
					label: 'Call backend'
				},
			},
			{
				id: 'e3a-3b',
				source: '3a',
				target: '3b',
				type: 'straight',
				data: {
					label: 'Make computation'
				},
			},
			{
				id: '3b-3c',
				source: '3b',
				target: '3c',
				type: 'straight',
				data: {
					label: 'Write to S3'
				},
			}
		]
	});
};
