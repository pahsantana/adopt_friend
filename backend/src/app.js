import express from 'express';
import cors from 'cors'
import routes from './routes';

import './database';


var corsOptions = {
    origin: "http://localhost:8081",
    optionsSucessStatus: 200,
    AccessControlAllowOrigin: '*',
    AccessControlAllowCredentials: true,
    AccessControlAllowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    AccessControlAllowHeaders: '*'
};

class App {

    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    };

    middlewares(){
        this.server.use(cors(corsOptions));
        this.server.use(express.json());
        this.server.use(express.urlencoded({extended:true}));
        // this.server.use((req, res, next) => {
        //     const token = req.headers.authorization;
        //     console.log('####################################');
        //     if(token) {
        //         console.log('A token is send by the application');
        //         console.log('Token value is ' + token);
        //     } else {
        //         console.log('No token is send by the the application');
        //     }
        //     console.log('####################################');
        //     next();
        // });
    };

    routes(){
        this.server.use(routes);
    };
};

export default new App().server;