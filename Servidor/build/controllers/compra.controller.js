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
exports.compraController = void 0;
const database_1 = __importDefault(require("../database"));
class CompraController {
    Realizar_compra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tarjetas, no_tarjeta, mes, anio, cvv2, total, nombre } = req.body;
            var cliente = -1;
            for (let index = 0; index < tarjetas.length; index++) {
                const element = tarjetas[index];
                cliente = element.duenio;
                yield database_1.default.query('call guardar_carrito (?, ?, ?, ?)', [element.codigo, element.tipo_giftcard, element.duenio, element.value]);
            }
            yield database_1.default.query('call Generar_Compra (?, ?, ?, ?, ?)', [no_tarjeta, mes, anio, cvv2, cliente]);
            res.json({
                code: 200
            });
        });
    }
}
exports.compraController = new CompraController();
