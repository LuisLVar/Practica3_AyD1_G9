import { Router } from 'express';
import { apiController } from '../controllers/apiController';
import { adminController } from '../controllers/adminController';
import pool from '../database';

class ApiRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void {
        this.router.get('/aux/cards', apiController.getCardsAux);
        this.router.get('/values', adminController.getValues);
        this.router.get('/giftcard', adminController.getGiftCards);
        this.router.post('/giftcard/regalo', adminController.regalarGiftcard);
        this.router.get('/transaccion', adminController.getTransacciones);
    }

}

const apiRoutes = new ApiRoutes();
export default apiRoutes.router;