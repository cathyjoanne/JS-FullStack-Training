class car{
    speed;
    constructor(){
        this.speed=70;
    }
    accelerator(){
        this.speed+=70;
    }
    checkspeed():string{
        return `${this.speed}`;
    }
}

let redcar = new car();
redcar.accelerator();
console.log(redcar.checkspeed()); //returns 140