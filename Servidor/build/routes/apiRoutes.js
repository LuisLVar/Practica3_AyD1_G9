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
        this.router.get('/aux/cards', apiController_1.apiController.getCardsAux);
        this.router.get('/values', adminController_1.adminController.getValues);
        this.router.get('/giftcard', adminController_1.adminController.getGiftCards);
    }
}
const apiRoutes = new ApiRoutes();
exports.default = apiRoutes.router;
