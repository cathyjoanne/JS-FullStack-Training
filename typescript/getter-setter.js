var Person = /** @class */ (function () {
    function Person(fname, lname, age) {
        this._fname = fname;
        this._lname = lname;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (theAge) {
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.details = function () {
        return "".concat(this._fname, " ").concat(this._lname, " is ").concat(this._age, " year old");
    };
    return Person;
}());
var obj = new Person("anuj", "sungh", 23);
console.log(obj.details());
