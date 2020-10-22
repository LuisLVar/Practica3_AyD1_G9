export interface Pago {
    no_tarjeta?: number;
    mes?: string;
    anio?: string;
    cvv2?: number;
    total?: number;
    tarjetas?: Array<Tarjeta>;

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