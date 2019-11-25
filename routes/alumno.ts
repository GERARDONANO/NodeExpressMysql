import { Router, Request, Response } from 'express';
import Mysql from '../clases/mysql';

const alumnRoutes = Router();

const conectar = new Mysql().conectarse();


alumnRoutes.get('/', async ( req : Request, res : Response ) => {

   await conectar.query('SELECT * from alumno' ,  ( err, result ) => {

        if (err) throw err;
      

        res.send( result );
        /* res.json({
            ok : true ,
            result
        }); */


    });
    
});


alumnRoutes.post('/', async ( req : Request , res : Response ) => {

    const nombre = req.body.nombre;
    const apellido = req.body.apellido;


    const sql = "INSERT INTO alumno (Nombre,Apellido) VALUES ( '"+nombre+"', '"+apellido+"' )";


    await conectar.query( sql, ( err , result ) => {

        if ( err ) throw err;


        res.json({
            ok : true,
            result
        });

    });

});



alumnRoutes.put('/', async ( req : Request , res : Response ) => {

    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const id = req.body.id;


    const sql = "UPDATE alumno SET  nombre='"+nombre+"', apellido='"+apellido+"' WHERE Id = "+id+" ";


    await conectar.query( sql, ( err , result ) => {

        if ( err ) throw err;


        res.json({
            ok : true,
            result
        });

    });

});


alumnRoutes.delete('/', async ( req : Request , res : Response ) => {

    const id = req.body.id;


    const sql = "DELETE FROM alumno WHERE Id = "+id+" ";


    await conectar.query( sql, ( err , result ) => {

        if ( err ) throw err;


        res.json({
            ok : true,
            result
        });

    });

});




export default alumnRoutes;