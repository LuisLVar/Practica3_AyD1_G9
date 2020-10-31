"use strict";
<<<<<<< HEAD
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
exports.apiController = void 0;
const database_1 = __importDefault(require("../database"));
const node_fetch_1 = __importDefault(require("node-fetch"));
class ApiController {
    sync(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cards;
            let values;
            yield node_fetch_1.default("https://my-json-server.typicode.com/CoffeePaw/AyD1API/Card")
                .then(response => response.json())
                .then(data => cards = data)
                .catch((error) => console.log(error));
            yield node_fetch_1.default("https://my-json-server.typicode.com/CoffeePaw/AyD1API/Value")
                .then(response => response.json())
                .then(data => values = data)
                .catch((error) => console.log(error));
            for (let value of values) {
                if (JSON.stringify(yield database_1.default.query('select * from value where id = ? and  value = ?', [value.id, value.total])) == "[]") {
                    yield database_1.default.query('insert into value(id, value) values(?, ?)', [value["id"], value["total"]]);
                    console.log("Se ingreso un registro en la tabla value con id:", value.id, "y total:", value.total);
                }
            }
            for (let card of cards) {
                let card_db = JSON.parse(JSON.stringify(yield database_1.default.query('select * from tipo_giftcard where name = ?', card.name)));
                if (card_db.length == 0) {
                    yield database_1.default.query('insert into tipo_giftcard(name, image, chargerate, active) values(?, ?, ?, ?)', [card.name, card.image, card.chargeRate, card.active ? 1 : 0]);
                    console.log("Se ingreso un registro en la tabla tipo_giftcard con name:", card.name, ", image:", card.image, ", chargerate:", card.chargeRate, "active:", card.active ? 1 : 0);
                    let tipo_gitcard = (yield database_1.default.query('select id from tipo_giftcard where name = ?', card.name))[0].id;
                    for (let i of card["availability"]) {
                        if (JSON.stringify(yield database_1.default.query('select * from availability where value = ? and tipo_giftcard = ?', [i, tipo_gitcard])) == "[]") {
                            yield database_1.default.query('insert into availability(value, tipo_giftcard) values(?, ?)', [i, tipo_gitcard]);
                            console.log("Se ingreso un registro en la tabla availability con value:", i, "tipo_gift_card:", tipo_gitcard);
                        }
                    }
                }
                else {
                    if (!(card_db[0].image == card.image && card_db[0].chargerate == card.chargeRate && card_db[0].active == card.active)) {
                        yield database_1.default.query('update tipo_giftcard set image = ?, chargerate = ?, active = ? where name = ?', [card.image, card.chargeRate, card.active ? 1 : 0, card.name]);
                        console.log("Se actualizo un registro en la tabla tipo_giftcard con name:", card.name, ", image:", card.image, ", chargerate:", card.chargeRate, "active:", card.active ? 1 : 0);
                    }
                    let tipo_gitcard = (yield database_1.default.query('select id from tipo_giftcard where name = ?', [card.name]))[0].id;
                    for (let i of card["availability"]) {
                        if (JSON.stringify(yield database_1.default.query('select * from availability where value = ? and tipo_giftcard = ?', [i, tipo_gitcard])) == "[]") {
                            yield database_1.default.query('insert into availability(value, tipo_giftcard) values(?, ?)', [i, tipo_gitcard]);
                            console.log("Se ingreso un registro en la tabla availability con value:", i, "tipo_gift_card:", tipo_gitcard);
                        }
                    }
                }
            }
            res.send("Se sincronizo la Base de datos con el api del Auxiliar.");
        });
    }
    tasa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let tasa;
            yield node_fetch_1.default("https://my-json-server.typicode.com/CoffeePaw/AyD1API/TasaCambio")
                .then(response => response.json())
                .then(data => tasa = data)
                .catch((error) => console.log(error));
            res.json(tasa);
        });
    }
=======
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiController = void 0;
// import pool from '../database';
class ApiController {
>>>>>>> feature/integracion_compras_server
}
exports.apiController = new ApiController();
