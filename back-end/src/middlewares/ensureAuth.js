const { verify } = require('jsonwebtoken');
const authConfig = require('../configs/auth');

function ensureAuth(request, response, next){

    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw "JWT não informado.";
    }

    const [, token] = authHeader.split(" ");

    try {
        
        const { sub: id_user } = verify(token, authConfig.jwt.secret);
        
        request.user = {
            id: Number(id_user)
        }

        return next();
    } catch{
        throw "JWT Token inválido.";
    }
}

module.exports = ensureAuth;