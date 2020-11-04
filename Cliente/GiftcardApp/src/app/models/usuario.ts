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

export interface Log{
    id?: number;
    nombres?: string;
    apellidos?: string;
    tipo_usuario?: number;
    username?: string;
}
