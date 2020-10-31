"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
//En TS se pueden definir los tipos
const express_1 = __importDefault(require("express")); //lo de los parentesis se define el tipo de dato
const morgan_1 = __importDefault(require("morgan")); //se pueden ver las peticiones que se hacen
const cors_1 = __importDefault(require("cors"));
const apiRoutes_1 = __importDefault(require("./routes/apiRoutes"));
const compra_routes_1 = __importDefault(require("./routes/compra.routes"));
class Server {
    constructor() {
        this.app = express_1.default(); //express() devuelve un objeto
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000); //el process es para que si ya exite un puerto definido se toma ese o sino agarra el 3000
        //ese set es de app, es como si se le hubiera declarado una variable a app
        this.app.use(morgan_1.default('dev')); //el dev es para ver lo que estan pidiendo los clientes
        this.app.use(cors_1.default()); //pedir los datos al servidor 
        this.app.use(express_1.default.json()); //para que entienda el formato json y guarda en un req.body
        this.app.use(express_1.default.urlencoded({ extended: false })); //porsi para usar formato html
    }
    routes() {
        this.app.use('/api', apiRoutes_1.default);
        this.app.use('', compra_routes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
exports.server = new Server(); //ejecutara el constructor
exports.server.start();
