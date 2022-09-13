interface Person3{
    fname:string;
    mname?:string;
    lname:string;
}
function getFullName(person:Person3){
    if(person.mname){
        return `${person.fname} ${person.mname} ${person.lname}`
    }
    return `${person.fname} ${person.lname}`
}
let sumit ={
    fname:'sumit',
    lname:'joshi'
}
console.log(getFullName(sumit))