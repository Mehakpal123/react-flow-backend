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
				position: {
					x: -500,
					y: 125
				},
				data: {
					'label': 'Customer'
				},
				label: 'Customer'
			},
			{
				id: '2',
				type: 'input',
				data: {
					'label': 'Client data layer'
				},
				position: {
					x: -350,
					y: 50
				},
				style: {
					width: 150,
					height: 200,
					zIndex: -1
				}
			},
			{
				id: '2a',
				type: 'LambdaFunction',
				parentNode: '2',
				extent: 'parent',
				target: 'left',
				targetPosition: 'left',
				position: {
					x: 53,
					y: 35
				},
				data: {
					label: 'Greengrass lambda'
				}
			},
			{
				id: '2b',
				type: 'DB',
				parentNode: '2',
				extent: 'parent',
				position: {
					x: 53,
					y: 148
				},
				data: {
					label: 'Storage engine'
				}
			},
			{
				id: '3',
				type: 'AWSCloud',
				position: {
					x: -80,
					y: 48
				},
				data: {
					label: 'AWS cloud'
				},
				style: {
					border: '1px solid black',
					borderRadius: '2px',
					width: 300,
					height: 200,
					zIndex: -1,
					backgroundColor: 'white'

				},
			},
			{
				id: '3a',
				type: 'APIGateway',
				parentNode: '3',
				extent: 'parent',
				position: {
					x: 30,
					y: 40
				},
				data: {
					label: 'API gateway'
				}
			},
			{
				id: '3b',
				type: 'EC2',
				parentNode: '3',
				extent: 'parent',
				position: {
					x: 130,
					y: 120
				},
				data: {
					label: 'AWS EC2'
				}
			},
			{
				id: '3c',
				type: 'S3',
				parentNode: '3',
				extent: 'parent',
				position: {
					x: 250,
					y: 70
				},
				data: {
					label: 'Object storage'
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
				sourceHandle: 'right_source_0',
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
