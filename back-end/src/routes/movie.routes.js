const { Router } = require('express');
const movieController = require('../controllers/moviesControllers');
const ensureAuth = require('../middlewares/ensureAuth');

const movieRouter = Router();
const movieControll = new movieController();

movieRouter.post('/', ensureAuth, movieControll.create);
movieRouter.get('/:id_movie', ensureAuth, movieControll.show);
movieRouter.get('/', ensureAuth, movieControll.index);
movieRouter.delete('/:id_movie', ensureAuth, movieControll.delete);

module.exports = movieRouter;