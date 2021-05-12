import express from 'express';
import cors from 'cors'
import routes from './routes';

import './database';


var corsOptions = {
    origin: "http://localhost:8081",
    optionsSucessStatus: 200
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
    };

    routes(){
        this.server.use(routes);
    };
};

export default new App().server;