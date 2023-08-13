const baseConnection = require('../database/knex');
const authConfig = require('../configs/auth');
const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');

class SessionsControllers{

    async create(request, response){

        const { user_email, password } = request.body;

        const user = await baseConnection('users').where({ user_email }).first();
        
        if(!user){
            return response.json({"status": "401", "message": "E-mail ou senha não conferi."});
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            return response.json({"status": "401", "message": "E-mail ou senha não conferi."});
        }

        const { secret, expiresIn } = authConfig.jwt;
        const token = sign({}, secret, {
            subject: String(user.id_user),
            expiresIn
        });

        return response.json({user, token});

    }
}

module.exports = SessionsControllers;