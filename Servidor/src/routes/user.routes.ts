import {Router} from 'express';

import {userController} from '../controllers/user.controller';

class UserRoutes{

    public router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.post('/login', userController.GetUser);
        this.router.post('/registro', userController.Registro);
    }

}

const userRoutes = new UserRoutes();
export default userRoutes.router;