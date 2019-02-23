const AuthenticationController = require('./controllers/AuthenticationController')
const AuthControlPolicy = require('./policies/AuthControlPolicy')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {

    app.post('/register', AuthControlPolicy.register, AuthenticationController.register);

    app.post('/login', AuthenticationController.login);

    app.get('/songs', SongsController.index)

    app.post('/songs', SongsController.post)

}
