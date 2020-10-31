import { json, Request, Response } from 'express';
import pool from '../database';
import fetch from 'node-fetch'

class ApiController {

  public async sync(req: Request, res: Response) {

    let cards: any;
    let values: any;

    await fetch("https://my-json-server.typicode.com/CoffeePaw/AyD1API/Card")
      .then(response => response.json())
      .then(data => cards = data)
      .catch((error) => console.log(error));
    
    await fetch("https://my-json-server.typicode.com/CoffeePaw/AyD1API/Value")
      .then(response => response.json())
      .then(data => values = data)
      .catch((error) => console.log(error));

    for (let value of values) {
      if(JSON.stringify(await pool.query('select * from value where id = ? and  value = ?',[value.id, value.total])) == "[]"){
        await pool.query(
          'insert into value(id, value) values(?, ?)', 
          [value["id"], value["total"]]
        );
        
        console.log("Se ingreso un registro en la tabla value con id:", value.id ,"y total:", value.total);
      }
    }

    for (let card of cards) {

      let card_db = JSON.parse(JSON.stringify(await pool.query('select * from tipo_giftcard where name = ?', card.name)));

      if(card_db.length ==0 ){
        
        await pool.query('insert into tipo_giftcard(name, image, chargerate, active) values(?, ?, ?, ?)', 
          [card.name, card.image, card.chargeRate, card.active?1:0] );

        console.log("Se ingreso un registro en la tabla tipo_giftcard con name:", card.name , ", image:", card.image, ", chargerate:", card.chargeRate, "active:", card.active?1:0);

        let tipo_gitcard = (await pool.query('select id from tipo_giftcard where name = ?', card.name))[0].id;

        for (let i  of card["availability"]) {
          if (JSON.stringify(await pool.query('select * from availability where value = ? and tipo_giftcard = ?', [ i, tipo_gitcard])) == "[]"){
            await pool.query('insert into availability(value, tipo_giftcard) values(?, ?)', [ i, tipo_gitcard]);
            console.log("Se ingreso un registro en la tabla availability con value:", i, "tipo_gift_card:", tipo_gitcard);
          }
        }
      }
      else{

        if(!( card_db[0].image == card.image && card_db[0].chargerate == card.chargeRate && card_db[0].active == card.active)){
          await pool.query( 'update tipo_giftcard set image = ?, chargerate = ?, active = ? where name = ?', 
            [card.image, card.chargeRate, card.active?1:0, card.name]);
          
          console.log("Se actualizo un registro en la tabla tipo_giftcard con name:" , card.name , ", image:", card.image, ", chargerate:", card.chargeRate, "active:", card.active?1:0);
        }

        let tipo_gitcard = (await pool.query('select id from tipo_giftcard where name = ?', [card.name]))[0].id;
        
        for (let i  of card["availability"]) {
          if (JSON.stringify(await pool.query('select * from availability where value = ? and tipo_giftcard = ?', [ i, tipo_gitcard])) == "[]"){
            await pool.query('insert into availability(value, tipo_giftcard) values(?, ?)', [ i, tipo_gitcard]);
            console.log("Se ingreso un registro en la tabla availability con value:", i, "tipo_gift_card:", tipo_gitcard);
          }
        }
      }
    }

    res.send("Se sincronizo la Base de datos con el api del Auxiliar.");
  }

  public async tasa(req: Request, res: Response) {

    let tasa: any;

    await fetch("https://my-json-server.typicode.com/CoffeePaw/AyD1API/TasaCambio")
      .then(response => response.json())
      .then(data => tasa = data)
      .catch((error) => console.log(error));
  
    res.json(tasa);
  }
}

export const apiController = new ApiController();