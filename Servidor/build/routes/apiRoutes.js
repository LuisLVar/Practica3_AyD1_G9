"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import pool from '../database';
class ApiRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
    }
}
const apiRoutes = new ApiRoutes();
exports.default = apiRoutes.router;
