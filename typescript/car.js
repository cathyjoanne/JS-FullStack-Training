var car = /** @class */ (function () {
    function car() {
        this.speed = 70;
    }
    car.prototype.accelerator = function () {
        this.speed += 70;
    };
    car.prototype.checkspeed = function () {
        return "".concat(this.speed);
    };
    return car;
}());
var redcar = new car();
redcar.accelerator();
console.log(redcar.checkspeed()); //returns 140
