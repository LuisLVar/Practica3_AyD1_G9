import { Request, Response } from 'express';
import pool from '../database';

class AdminController {

  public async getValues(req: Request, res: Response) {
    const data = await pool.query('select * from value');
    res.json(data);
  }


  public async getGiftCards(req: Request, res: Response) {
    const data = await pool.query('select * from tipo_giftcard');
    let result = new Array();
    for (let dato of data) {
      let availability = await pool.query(`select v.value from availability a
      INNER JOIN tipo_giftcard g
      ON a.tipo_giftcard = g.id
      INNER JOIN value v
      ON v.id = a.value
      WHERE tipo_giftcard = ?`, [dato.id]);

      dato.availability = JSON.parse(JSON.stringify(availability));
      result.push(dato);
    }

    res.json(result);
  }

  public async regalarGiftcard(req: Request, res: Response) {
    const data = await pool.query(`
    UPDATE giftcard 
    SET duenio = ?
    WHERE id = ?`, [req.body.user, req.body.giftcard]);

    res.json({ estado: true});
  }

  public async getTransacciones(req: Request, res: Response) {
    const data = await pool.query(`
    SELECT d.factura_no_factura, d.giftcard, t.name as tipo_giftcard, CONCAT(u.nombres, u.apellidos) as nombre, u.username as usuario, v.value
    FROM detalle_factura d
    INNER JOIN factura f
    ON f.no_factura = d.factura_no_factura
    INNER JOIN usuario u
    ON f.usuario = u.id
    INNER JOIN giftcard g 
    ON g.id = d.giftcard
    INNER JOIN tipo_giftcard t
    ON t.id = g.tipo_giftcard
    INNER JOIN value v
    on v.id = g.value`);

    res.json(data);
  }
}

export const adminController = new AdminController();