"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
class Mysql {
    constructor() {
    }
    conectarse() {
        const connection = mysql_1.default.createConnection({
            host: 'localhost',
            user: 'nodeMysql',
            password: '123456',
            database: 'nodeConMysql'
        });
        connection.connect((err) => {
            if (err)
                throw err;
            console.log('conectado');
        });
        return connection;
    }
}
exports.default = Mysql;
