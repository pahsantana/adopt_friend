export class MeusDados implements IMeusDados {

    constructor(
        public id?: number,
        public name: string = '',
        public cpf: string = '',
        public email: string = '',
        public phone: string = '',
        public oldPassword: string = '',
        public password: string = '',
        public confirmPassword: string = '',    
    ) { }
}

export interface IMeusDados {
    id?: number,
    name: string;
    cpf: string;
    email: string,
    phone: string,
    oldPassword: string,
    password: string;
}
