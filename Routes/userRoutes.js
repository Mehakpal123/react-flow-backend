const UserController = require('../controllers/UserController');

module.exports = function (app) {
	app.post('/signup', UserController.signup);
	app.post('/login', UserController.login);
}
