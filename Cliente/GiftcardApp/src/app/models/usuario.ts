export interface Usuario{
  id?:number,
  username?:string,
  correo?:string,
  contrasenia?:string,
  nombres?:string,
  apellidos?:string,
  cui?:string,
  fecha_nacimiento?: Date,
  tipo_usuario?:number
}
