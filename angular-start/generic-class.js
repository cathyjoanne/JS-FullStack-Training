var Stack = /** @class */ (function () {
    function Stack(size) {
        this.size = size;
        this.elements = [];
    }
    Stack.prototype.push = function (element) {
        this.elements.push(element);
    };
    Stack.prototype.getElements = function () {
        return this.elements;
    };
    return Stack;
}());
var numbers2 = new Stack(5);
for (var i = 1; i <= 4; i++) {
    numbers2.push(i);
}
console.log(numbers2.getElements());
