import {Router} from 'express';
import {compraController} from '../controllers/compra.controller';

class CompraRoutes{
    public router = Router();

    constructor(){
        this.config();
    }
    
    config(): void {
        this.router.post('/pago', compraController.Realizar_compra);
    }
}

const compraRoutes = new CompraRoutes();
export default compraRoutes.router;