export interface Card{
    id: string | number;
    name: string;
    image: string;
    chargeRate: number;
    active: boolean;
    availability: []
};

export interface Value{
    id: string | number,
    total: string | number
}