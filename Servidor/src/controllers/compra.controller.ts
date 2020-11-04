import { use } from 'chai';
import {Request, Response} from 'express';
import pool from '../database';

class CompraController {

    public async Realizar_compra(req: Request, res: Response){
        const {tarjetas,
            no_tarjeta,
            mes,
            anio,
            cvv2,
            total,
            nombre   
        } = req.body;

        var cliente = -1;
        for (let index = 0; index < tarjetas.length; index++) {
            const element = tarjetas[index];
            cliente = element.duenio;
            await pool.query('call guardar_carrito (?, ?, ?, ?)',
            [element.codigo,element.tipo_giftcard, element.duenio, element.value]);   
        }

        await pool.query('call Generar_Compra (?, ?, ?, ?, ?)', 
        [no_tarjeta,mes,anio,cvv2,cliente]);

        res.json({
            code: 200
        })

    }

    public async historial_compras(req: Request, res: Response){
        const {id_usuario} = req.body;

        const historial = await pool.query('call historial_compras(?)', [id_usuario]);

        res.json(historial[0]);
    }

    public async mis_tarjetas(req: Request, res: Response){
        const {id_usuario} = req.body;
        const mias = await pool.query("call mis_tarjetas(?)", [id_usuario]);
        res.json(mias[0]);
    }

    public async usuarios(req: Request, res: Response){
        const {id_usuario} = req.body;
        const user = await pool.query("SELECT us.username, us.id FROM usuario us "+
        "WHERE us.id != ? and us.tipo_usuario = 2", [id_usuario]);

        res.json(user);
    }
}

export const compraController = new CompraController();