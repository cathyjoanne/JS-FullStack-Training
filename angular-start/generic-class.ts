class Stack<T>{
    private elements:T[]=[];
    constructor(private size:number){

    }
    push(element:T):void{
        this.elements.push(element)
    }
    getElements():any{
        return this.elements;
    }
}
let numbers2 = new Stack<number>(5);
for(let i=1;i<=4;i++){
    numbers2.push(i);
}
console.log(numbers2.getElements())