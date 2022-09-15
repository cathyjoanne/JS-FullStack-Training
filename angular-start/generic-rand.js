function gerRandNumElem(items) {
    var ranInd = Math.floor(Math.random() * items.length);
    return items[ranInd];
}
console.log(gerRandNumElem([2, 3, 4, 5, 6, 7, 8]));
function gerRandStringElem(items) {
    var ranInd = Math.floor(Math.random() * items.length);
    return items[ranInd];
}
console.log(gerRandStringElem(['red', 'pink', 'green', 'blue']));
//generic version
function getRandElem(items) {
    var ranInd = Math.floor(Math.random() * items.length);
    return items[ranInd];
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 78, 9];
console.log(getRandElem(numbers));
