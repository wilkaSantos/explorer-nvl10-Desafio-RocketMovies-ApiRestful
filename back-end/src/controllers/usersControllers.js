const { request } = require('express');
const baseConnection = require('../database/knex');
const { hash, compare } = require('bcryptjs');

class userController{

    async create(request, response){

        const { username, user_email, userPassword } = request.body;
        const userExists =  await baseConnection('users').where({ user_email });

        if(userExists.length >= 1){
            return response.json({'message': 'E-mail já se encontra cadasrado.'});
        }

        const password = await hash(userPassword, 7);
        await baseConnection('users').insert({ username, user_email, password });
    
        return response.json({'message': 'Usuario criado.'});
    }
    
    async update(request, response){
        const { username, user_email, newPassword, oldPassword } = request.body;
        const id_user = request.user.id; 

        const user = await baseConnection('users').where({ id_user }).first();

        if(!user){
            return response.json({ "status": "201", "message": "Usuário não encontrado." });
        }

        const userEmailUpdate = await baseConnection('users').select('user_email').where({ id_user });

        if(userEmailUpdate && userEmailUpdate.id_user != user.id_user ){
            return response.json({"status": "401", "message": "Este e-mail já está em uso."});
        }

        if(newPassword && !oldPassword){
            return response.json({"status": '401', "message": "Para autalizar, é necessário informar a senha antiga e a nova."});
        }

        if(newPassword && oldPassword){
            const checkedPassword = await compare(oldPassword, user.password);

            if(!checkedPassword){
                return response.json({"status": "401", "message": "A senha antiga informada, não conferi com a senha cadastrada."});
            }

            user.password = await hash(newPassword, 7);
        }

        user.username = username ?? user.username;
        user.user_email = user_mail ?? user.user_email;

        await baseConnection('user').update(user).where({ id_user });
        return response.json({"status": "201", "message": "Usuário Atualizado." });
    }
    
    async delete(request, response){
        const id_user = request.user.id;
        
        const moviesExists = await baseConnection('movies').where({ id_user });

        if(moviesExists.length >= 1){
            return response.json({ 'message': 'Usuario nao pode ser excluir, pois existem filmes relacionados.' });
        }

        await baseConnection('users').where({ id_user }).delete();
        return response.json({ 'message': 'Usuario excluido.' });
    } 

}

module.exports = userController;