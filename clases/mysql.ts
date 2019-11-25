import mysql from 'mysql';


export default class Mysql{


    constructor(){

    }  


    conectarse(){

         const connection = mysql.createConnection({
             host     : 'localhost',
             user     : 'nodeMysql',
             password : '123456',
             database : 'nodeConMysql'
            });
             
         connection.connect( ( err ) => {
             if ( err ) throw err;
             console.log('conectado');
         });

        return connection;

    }

    
        
}