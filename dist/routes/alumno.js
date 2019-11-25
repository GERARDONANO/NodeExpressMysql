"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../clases/mysql"));
const alumnRoutes = express_1.Router();
const conectar = new mysql_1.default().conectarse();
alumnRoutes.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    yield conectar.query('SELECT * from alumno', (err, result) => {
        if (err)
            throw err;
        res.send(result);
        /* res.json({
            ok : true ,
            result
        }); */
    });
}));
alumnRoutes.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const sql = "INSERT INTO alumno (Nombre,Apellido) VALUES ( '" + nombre + "', '" + apellido + "' )";
    yield conectar.query(sql, (err, result) => {
        if (err)
            throw err;
        res.json({
            ok: true,
            result
        });
    });
}));
alumnRoutes.put('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const id = req.body.id;
    const sql = "UPDATE alumno SET  nombre='" + nombre + "', apellido='" + apellido + "' WHERE Id = " + id + " ";
    yield conectar.query(sql, (err, result) => {
        if (err)
            throw err;
        res.json({
            ok: true,
            result
        });
    });
}));
alumnRoutes.delete('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const id = req.body.id;
    const sql = "DELETE FROM alumno WHERE Id = " + id + " ";
    yield conectar.query(sql, (err, result) => {
        if (err)
            throw err;
        res.json({
            ok: true,
            result
        });
    });
}));
exports.default = alumnRoutes;
