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
    }
}
const compraRoutes = new CompraRoutes();
exports.default = compraRoutes.router;
