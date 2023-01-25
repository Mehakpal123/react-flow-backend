const mongoose = require('mongoose'),
	UserSchema = require('./UserSchema'),
	{ UnknownErrorOccured, UserNotFound, UserExists, UserCreated } = require('../../common/responseMessage')

UserSchema.statics = {
	signup: function (userPayload, cb) {
		const User = new this(userPayload);
		const resData = {
			code: UserCreated.code,
			message: UserCreated.message,
			data: userPayload
		}
		User.save((err, data) => cb(err, resData));
	},
	login: function (userPayload, cb) {
		const UserModel = new this(userPayload);
		let resData;

		//Find User
		this.findOne({ email: userPayload.email }, function (err, userData) {
			if (err) {
				resData = {
					code: UnknownErrorOccured.code,
					message: UnknownErrorOccured.message
				}
			}
			else if (!userData) {
				resData = {
					code: UserNotFound.code,
					message: UserNotFound.message,
					data: userData,
					status: false
				}
			}
			if (userData) {
				if (!UserModel.validateUser(userData)) {
					resData = {
						code: UserNotFound.code,
						message: UserNotFound.message,
						data: userData,
						status: false
					}
				}
				else {
					resData = {
						code: UserExists.code,
						message: UserExists.message,
						data: UserModel.getFinalData(userData),
						status: true
					}
				}
			}
			// Return callback from here
			return cb(null, resData);
		});

	},
}

const UserModel = mongoose.model('Users', UserSchema);
module.exports = UserModel;
