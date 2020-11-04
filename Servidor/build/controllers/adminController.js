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
exports.adminController = void 0;
const database_1 = __importDefault(require("../database"));
class AdminController {
    getValues(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield database_1.default.query('select * from value');
            res.json(data);
        });
    }
    getGiftCards(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield database_1.default.query('select * from tipo_giftcard');
            let result = new Array();
            for (let dato of data) {
                let availability = yield database_1.default.query(`select v.value from availability a
      INNER JOIN tipo_giftcard g
      ON a.tipo_giftcard = g.id
      INNER JOIN value v
      ON v.id = a.value
      WHERE tipo_giftcard = ?`, [dato.id]);
                dato.availability = JSON.parse(JSON.stringify(availability));
                result.push(dato);
            }
            res.json(result);
        });
    }
    regalarGiftcard(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield database_1.default.query(`
    UPDATE giftcard 
    SET duenio = ?
    WHERE id = ?`, [req.body.user, req.body.giftcard]);
            res.json({ estado: true });
        });
    }
    getTransacciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield database_1.default.query(`
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
        });
    }
}
exports.adminController = new AdminController();
