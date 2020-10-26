export interface Pago {
    no_tarjeta?: string | number;
    mes?: number;
    anio?: number;
    cvv2?: number;
    total?: number;
    tarjetas?: Array<Tarjeta>;
    nombre?: string
}

export interface Tarjeta{
    tipo_giftcard: number;
    duenio: number;
    value: number;
    codigo: string;
}

export interface Carro {
    name:string; 
    cantidad:number;
    total:number;
    tipo_giftcard:number; 
    precio:number;
}