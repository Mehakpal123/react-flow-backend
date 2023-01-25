require('dotenv').config()
const env = process.env.NODE_ENV; // 'dev' or 'test'

// configurable of dev environment
const dev = {
	app: {
		port: parseInt(process.env.DEV_APP_PORT) || 5000
	},
	db: {
		host: process.env.DEV_DB_HOST || '0.0.0.0',
		port: parseInt(process.env.DEV_DB_PORT) || 27017,
		dbname: process.env.DEV_DB_NAME || 'newsletter',
	}
}

// configuration of test environment
const test = {
	app: {
		port: parseInt(process.env.TEST_APP_PORT) || 5000,
	},
	db: {
		host: process.env.TEST_DB_HOST || '0.0.0.0',
		port: parseInt(process.env.TEST_DB_PORT) || 27017,
		dbname: process.env.TEST_DB_NAME || 'test',
	}
}

const config = {
	dev,
	test,
	coolThirdPartyApiKey: process.env.COOL_THIRD_PARTY_API_KEY
}

module.exports = config[env];
