const baseConnection = require('../database/knex');

class tagController{

    async delete(request, response){
        const { id_tag } = request.params;
        const tagExists = await baseConnection('tags').where({ id_tag });

        if(tagExists.length == 0){
            return response.json({ 'message': 'Registro de Tag não encontrado.' });
        }

        await baseConnection('tags').where({ id_tag }).delete();

        return response.json({ 'message': 'Tag excluida.' });
    }

}

module.exports = tagController;