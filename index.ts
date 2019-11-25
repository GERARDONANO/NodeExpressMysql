import Server from './clases/server';
import cors  from 'cors';
import bodyParser from 'body-parser';
import alumnRoutes from './routes/alumno';

const server = new Server();


// body-parser


server.app.use( bodyParser.urlencoded({ extended : true }) );
server.app.use( bodyParser.json() );



// rutas api
server.app.use('/alumno', alumnRoutes );

//  cors
server.app.use( cors() );



// levantar express
server.startServer( () => {

    console.log(`servidor en puerto ${ server.port } levantado correctamente`);

});