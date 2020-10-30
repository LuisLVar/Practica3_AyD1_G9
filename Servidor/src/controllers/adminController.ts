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

}

export const adminController = new AdminController();