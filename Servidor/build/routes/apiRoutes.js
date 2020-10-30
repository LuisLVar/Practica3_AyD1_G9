"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiController_1 = require("../controllers/apiController");
class ApiRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/aux/sync', apiController_1.apiController.sync);
        this.router.get('/aux/tasa', apiController_1.apiController.tasa);
    }
}
const apiRoutes = new ApiRoutes();
exports.default = apiRoutes.router;
