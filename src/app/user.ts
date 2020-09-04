export class User {
    constructor(
        public name: string,
        public password: string,
        public cnfpassword: string,
        public email: string,
        public dob: Date,
        public gender: string,
        public phone: string,
        public education: string,
        public tnc: boolean
    ) {}
}