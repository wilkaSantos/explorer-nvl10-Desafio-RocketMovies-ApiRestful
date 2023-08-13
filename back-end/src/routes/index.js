const { Router } = require('express');
const userRoute = require('./user.routes');
const movieRoute = require('./movie.routes');
const tagRoute = require('./tag.routes');
const sessionRoute = require('./sessions.routes');

const routes = Router();

routes.use('/users', userRoute);
routes.use('/movies', movieRoute);
routes.use('/tags', tagRoute);
routes.use('/sessions', sessionRoute);

module.exports = routes;