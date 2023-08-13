const baseConnection = require('../database/knex');
const DiskStorage = require('../providers/diskStorage');

class UserAvatarControllers{

    async update(request, response){
        const id_user = request.user.id;
        const avatarFilename = request.file.filename;
        const diskStorage = new DiskStorage();

        const user = await baseConnection('users').where({ id_user }).first();

        if(!user){
            return response.json({ "status": "401", "message": "Não tem permissão para realizar alteração." });
        }

        if(user.avatar){
            await diskStorage.deleteFile(user.avatar);
        }

        const filename = await diskStorage.saveFile(avatarFilename);
        user.avatar = filename;

        await baseConnection('users').update(user).where({ id_user });

        return response.json({ "status": "201", "message": "Avatar atualizado." });
    }
}

module.exports = UserAvatarControllers;