export interface Card{
    id?: string | number;
    name?: string;
    image?: string;
    chargeRate: number;
    active?: boolean;
    availability?: Array<any>
};

export interface Value{
    id: string | number,
    total: string | number
}

export interface Historial {
    no_factura?: number;
    no_tarjeta?: string;
    total?: number;
}

export interface Mis_Tarjetas{
    id?: string;
    name?: string;
    image?: string;
    value?: number
}