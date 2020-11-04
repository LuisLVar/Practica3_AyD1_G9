"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/login', user_controller_1.userController.GetUser);
        this.router.post('/registro', user_controller_1.userController.Registro);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
