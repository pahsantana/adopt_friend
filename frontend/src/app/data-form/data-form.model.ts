export class DataForm implements IDataForm {

    constructor(
        public id?: number,
        public name: string = '',
        public city: string = '',
        public age: number = null,
        public size: string = '',
        public gender: string = '',
        public breed: string = '',
        public weight: number = null,
        public vaccine?: boolean,
        public castration?: boolean,
        public microchip?: boolean,
        public url: string = '',
        public description: string = '',
    ) { }
}

export interface IDataForm {
    id?: number,
    name: string;
    city: string;
    age?: number,
    size: string,
    gender: string,
    breed?: string;
    weight?: number; 
    vaccine?: boolean; 
    castration?: boolean;
    microchip?: boolean;
    url: string;
    description: string;
    user_id?: number;
}
