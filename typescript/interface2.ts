interface json{
    tojson():string;
}
class Person4 implements json{
    constructor (private fname:string, private lname:string){

    }
    tojson(): string {
        return JSON.stringify(this);
    }
}
class Employee2 implements json{
    constructor (private fname:string, private lname:string){

    }
    tojson(): string {
        return JSON.stringify(this)
    }
}
const objj =new Person4('sumit','joshi');
console.log(objj.tojson());