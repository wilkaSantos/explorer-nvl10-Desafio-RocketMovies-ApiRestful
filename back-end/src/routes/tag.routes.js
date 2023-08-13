const { Router } = require('express');
const tagController = require('../controllers/tagsControllers');
const ensureAuth = require('../middlewares/ensureAuth');

const tagRoute = Router();
const tagControll = new tagController();

tagRoute.delete('/:id_tag', ensureAuth, tagControll.delete);

module.exports = tagRoute;