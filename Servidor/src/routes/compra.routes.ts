import {Router} from 'express';
import {compraController} from '../controllers/compra.controller';

class CompraRoutes{
    public router = Router();

    constructor(){
        this.config();
    }
    
    config(): void {
        this.router.post('/pago', compraController.Realizar_compra);
        this.router.post('/historial', compraController.historial_compras);
        this.router.post('/mias', compraController.mis_tarjetas);
        this.router.post('/user-rega', compraController.usuarios);
    }
}

const compraRoutes = new CompraRoutes();
export default compraRoutes.router;