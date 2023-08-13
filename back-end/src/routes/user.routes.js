const multer = require('multer');
const { Router } = require('express');
const uploadConfig = require('../configs/upload');
const ensureAuth = require('../middlewares/ensureAuth');
const userController = require('../controllers/usersControllers');
const userAvatarControllers = require('../controllers/userAvatarControllers');

const UserRouter = Router();
const userControll = new userController();
const avatarControll = new userAvatarControllers();
const upload = multer(uploadConfig.Multer);

UserRouter.post('/', userControll.create);
UserRouter.put('/', ensureAuth, userControll.update);
UserRouter.delete('/', ensureAuth, userControll.delete);
UserRouter.patch('/avatar', ensureAuth, upload.single("avatar"), avatarControll.update);

module.exports  = UserRouter;