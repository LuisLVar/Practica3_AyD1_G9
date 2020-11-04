//En TS se pueden definir los tipos
import express, { Application } from 'express';//lo de los parentesis se define el tipo de dato
import morgan from 'morgan'; //se pueden ver las peticiones que se hacen
import cors from 'cors';
import apiRoutes from './routes/apiRoutes';
import compraRoutes from './routes/compra.routes';
import userRoutes from './routes/user.routes';

class Server {//esta clase iniciara al servidor

    public app: Application; //es del tipo application

    constructor(){//el constructor inicializa express en app 
        this.app = express();//express() devuelve un objeto
        this.config();
        this.routes();
    }
    config(): void {//de tipo vacio
        this.app.set('port',process.env.PORT ||3000);//el process es para que si ya exite un puerto definido se toma ese o sino agarra el 3000
        //ese set es de app, es como si se le hubiera declarado una variable a app
        this.app.use(morgan('dev'));//el dev es para ver lo que estan pidiendo los clientes
        this.app.use(cors());//pedir los datos al servidor 
        this.app.use(express.json());//para que entienda el formato json y guarda en un req.body
        this.app.use(express.urlencoded({extended:false}));//porsi para usar formato html
    }
    routes():void {//para conf las rutas de mi servidor
        this.app.use('/api', apiRoutes);
        this.app.use('', compraRoutes);
        this.app.use('/user', userRoutes);
    }
    start():void {//inicializar el servidor -> para que el servidor empiece a escuchar
        this.app.listen(this.app.get('port'),() => {  
            console.log('Server on port ',this.app.get('port'));
        });
    }

}
export const server = new Server();//ejecutara el constructor
server.start();