import { Person } from './Person.js';
export class Hero extends Person{
    static version = 101;
    _power = 0;
    constructor(fname, lname, city){
        super(city);
        this.firstname = fname;
        this.lastname = lname;
    }
    get power(){
        return this._power;
    }
    set power(npower){
        this._power = npower;
    }
    fullname(){
        return this.firstname+" "+this.lastname;
    }
};