"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiController_1 = require("../controllers/apiController");
const adminController_1 = require("../controllers/adminController");
class ApiRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //this.router.get('/aux/cards', apiController.getCardsAux);
        this.router.get('/values', adminController_1.adminController.getValues);
        this.router.get('/giftcard', adminController_1.adminController.getGiftCards);
        this.router.post('/giftcard/regalo', adminController_1.adminController.regalarGiftcard);
        this.router.get('/transaccion', adminController_1.adminController.getTransacciones);
        this.router.get('/aux/sync', apiController_1.apiController.sync);
        this.router.get('/aux/tasa', apiController_1.apiController.tasa);
    }
}
const apiRoutes = new ApiRoutes();
exports.default = apiRoutes.router;
