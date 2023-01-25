const mongoose = require('mongoose'),
	{ Schema } = mongoose,
	uniqueValidator = require('mongoose-unique-validator'),
	bcrypt = require('bcrypt'),
	jwt = require('jsonwebtoken'),
	SALT_WORK_FACTOR = 10,
	secretKey = process.env.SECRET_KEY


const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
}, { timestamps: true });

// Validators go here
UserSchema.plugin(uniqueValidator, { message: 'is already taken' });

//Password Hashing Middleware goes here
UserSchema.pre('save', async function (next) {
	// generate a passwor hash
	const salt = await bcrypt.genSalt(SALT_WORK_FACTOR),
		hash = await bcrypt.hash(this.password, salt);

	// Update password with hash
	this.password = hash;
	next();

});

// Validate User Password Function
UserSchema.methods.validateUser = function (userData) {
	return bcrypt.compareSync(this.password, userData.password);
}

// Get User's JSON representation function
UserSchema.methods.getFinalData = function ({ _id, name, email }) {
	return {
		name,
		email,
		token: this.generateJWT({ _id, name, email }),
	};
};

// Generate JWT Token Function
UserSchema.methods.generateJWT = function ({ _id, email }) {
	const today = new Date();
	const exp = new Date(today);
	exp.setDate(today.getDate() + 60);

	return jwt.sign({
		id: _id,
		email,
		exp: parseInt(exp.getTime() / 1000)
	}, secretKey);
}

module.exports = UserSchema;
