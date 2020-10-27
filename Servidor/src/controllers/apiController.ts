import { json, Request, Response } from 'express';
// import pool from '../database';
import fetch from 'node-fetch'


class ApiController {

  public async getCardsAux(req: Request, res: Response) {
    let datos: any;
    await fetch("https://my-json-server.typicode.com/CoffeePaw/AyD1API/Card")
      .then((result) => result.json())
      .then((data) => {
        console.log(data)
        datos = data;
      })
      .catch((error) => console.log(error));
    
    // return datos;
    res.json(datos);
  }

}

export const apiController = new ApiController();