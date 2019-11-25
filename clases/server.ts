import express from 'express';

export default class Server {

    public app : express.Application;
    public port : number = 4000;

    constructor(){
        // inicializar express
        this.app = express();
    }

    startServer( callback : any ){
        this.app.listen( this.port, callback );
    }

} 