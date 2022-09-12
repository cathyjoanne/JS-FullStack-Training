function factorial(a) {
    var result = 1;
    for (var i = 1; i <= a; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));
