"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const database_1 = __importDefault(require("../database"));
class UserController {
    GetUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user, password } = req.body;
            const usuario = yield database_1.default.query(`
            SELECT id, nombres, apellidos, tipo_usuario, username 
            FROM usuario 
            WHERE username = ? OR correo = ? AND contrasenia = ?
        `, [user, user, password]);
            res.json(usuario[0]);
        });
    }
    Registro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { correo, contrasenia, username, nombres, apellidos, cui, fecha_nacimiento, tipo_usuario } = req.body;
            yield database_1.default.query(`
            INSERT INTO usuario(username, correo, contrasenia, nombres, apellidos, cui, fecha_nacimiento, tipo_usuario)
            VALUES(?, ?, ?, ?, ?, ?, ?, ?)
        `, [username, correo, contrasenia, nombres, apellidos, cui, fecha_nacimiento, tipo_usuario]);
            res.json({
                code: 200
            });
        });
    }
}
exports.userController = new UserController();
