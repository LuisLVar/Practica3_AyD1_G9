export interface Card{
    id: string | number;
    name: string;
    image: string;
    chargeRate: number;
    active: boolean;
    availability: Array<any>
};

export interface Value{
    id: string | number,
    total: string | number
}