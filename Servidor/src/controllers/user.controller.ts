import { use } from 'chai';
import {Request, Response} from 'express';
import pool from '../database';


class UserController {


    public async GetUser(req: Request, res: Response){
        const {user, password} = req.body;

        const usuario = await pool.query(`
            SELECT id, nombres, apellidos, tipo_usuario, username 
            FROM usuario 
            WHERE username = ? OR correo = ? AND contrasenia = ?
        `,[user, user, password]);

        res.json(usuario[0]);
    }

}


export const userController = new UserController();