"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const compra_controller_1 = require("../controllers/compra.controller");
class CompraRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/pago', compra_controller_1.compraController.Realizar_compra);
        this.router.post('/historial', compra_controller_1.compraController.historial_compras);
        this.router.post('/mias', compra_controller_1.compraController.mis_tarjetas);
        this.router.post('/user-rega', compra_controller_1.compraController.usuarios);
    }
}
const compraRoutes = new CompraRoutes();
exports.default = compraRoutes.router;
