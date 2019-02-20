const AuthenticationController = require('./controllers/AuthenticationController')
const AuthControlPolicy = require('./policies/AuthControlPolicy');

module.exports = (app) => {

    app.post('/register', AuthControlPolicy.register, AuthenticationController.register);

}
