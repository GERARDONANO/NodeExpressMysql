"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./clases/server"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const alumno_1 = __importDefault(require("./routes/alumno"));
const server = new server_1.default();
// body-parser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
// rutas api
server.app.use('/alumno', alumno_1.default);
//  cors
server.app.use(cors_1.default());
// levantar express
server.startServer(() => {
    console.log(`servidor en puerto ${server.port} levantado correctamente`);
});
