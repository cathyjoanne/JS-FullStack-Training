//generic func w two types
function merge<U,V>(obj1:U,obj2:V){
    return {
        ...obj1,...obj2
    }
}
let result=merge(
    {name:'sumit',age:23},
    {jobtitle:'corporate trainer'}
)
console.log(result);