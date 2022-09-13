class Person2
{
    private _fname:string;
    private _lname:string;
    constructor(fname:string, lname:string){
        this._fname=fname;
        this._lname=lname;
    }
    public fullName():string{
        return `${this._fname} ${this._lname}`
    }
}
class Employee extends Person2 //child
{
    private _jobTitle:string;
    constructor(fname:string,lname:string,private jobTitle:string){
        super(fname,lname)
        this._jobTitle=jobTitle
    }
    describe():string{
        
    }
}