function gerRandNumElem(items:number[]):number{
    let ranInd=Math.floor(Math.random()*items.length);
    return items[ranInd]
}
console.log(gerRandNumElem([2,3,4,5,6,7,8]))
function gerRandStringElem(items:string[]):string{
    let ranInd=Math.floor(Math.random()*items.length);
    return items[ranInd]
}
console.log(gerRandStringElem(['red','pink','green','blue']))

//generic version
function getRandElem<A>(items:A[]):A{
    let ranInd=Math.floor(Math.random()*items.length);
    return items[ranInd]
}
let numbers=[1,2,3,4,5,6,7,78,9];
console.log(getRandElem<number>(numbers))