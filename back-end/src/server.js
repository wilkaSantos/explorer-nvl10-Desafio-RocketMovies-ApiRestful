require('dotenv/config');

const cors = require('cors');
const express = require('express');
const routes = require('./routes');

const uploadConfig = require('./configs/upload');
const database = require('./database/knex');

const application = express();
const port = process.env.PORT;    


application.use(cors());
application.use(express.json());
application.use('/file', express.static(uploadConfig.UPLOADS_FOLDER));
application.use(routes);
database();

application.use((error, request, response, next)=>{
    if(error instanceof Error){
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        });
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
        //details: error.message
    });
});


application.listen(port, ()=> console.log(`Porta em execucao ${port}.`));
