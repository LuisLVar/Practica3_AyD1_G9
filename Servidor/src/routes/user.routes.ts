import {Router} from 'express';

import {userController} from '../controllers/user.controller';

class UserRoutes{

    public router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.post('/login', userController.GetUser);
    }

}

const userRoutes = new UserRoutes();
export default userRoutes.router;