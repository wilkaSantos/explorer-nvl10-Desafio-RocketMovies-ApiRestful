const { Router } = require('express');
const sessionsControllers = require('../controllers/sessionsControllers');

const sessionControll = new sessionsControllers();
const sessionRouter = Router();

sessionRouter.post('/', sessionControll.create);

module.exports = sessionRouter;