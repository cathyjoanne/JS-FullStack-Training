class Person{
    private _age:number;
    private _fname:string;
    private _lname:string;
    constructor(fname:string,lname:string,age:number){
        this._fname=fname;
        this._lname=lname;
        this._age=age;
    }
    public get age(){
        return this._age;
    }
    public set age(theAge:number){
        this._age=theAge;
    }
    public details(){
        return `${this._fname} ${this._lname} is ${this._age} year old`
    }
}
const obj=new Person("anuj","sungh",23);
console.log(obj.details());