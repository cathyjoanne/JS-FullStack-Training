var Person4 = /** @class */ (function () {
    function Person4(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    Person4.prototype.tojson = function () {
        return JSON.stringify(this);
    };
    return Person4;
}());
var Employee2 = /** @class */ (function () {
    function Employee2(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    Employee2.prototype.tojson = function () {
        return JSON.stringify(this);
    };
    return Employee2;
}());
var objj = new Person4('sumit', 'joshi');
console.log(objj.tojson());
