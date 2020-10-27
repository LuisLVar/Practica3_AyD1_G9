import { Router } from 'express';
import { apiController } from '../controllers/apiController';
import pool from '../database';

class ApiRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void {

    }

}

const apiRoutes = new ApiRoutes();
export default apiRoutes.router;