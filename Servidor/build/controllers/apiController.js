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
exports.apiController = void 0;
// import pool from '../database';
const node_fetch_1 = __importDefault(require("node-fetch"));
class ApiController {
    getCardsAux(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let datos;
            yield node_fetch_1.default("https://my-json-server.typicode.com/CoffeePaw/AyD1API/Card")
                .then((result) => result.json())
                .then((data) => {
                console.log(data);
                datos = data;
            })
                .catch((error) => console.log(error));
            // return datos;
            res.json(datos);
        });
    }
}
exports.apiController = new ApiController();
