export interface Usuario{
  id?:string;
  correo?:string;
  password?:string;
  nombre?:string;
  apellido?:string;
  dpi?:number;
  edad?:number;
  tarjetas?:any[];
  transaccion?:any[];
}
