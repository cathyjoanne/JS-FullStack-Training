function getFullName(person) {
    if (person.mname) {
        return "".concat(person.fname, " ").concat(person.mname, " ").concat(person.lname);
    }
    return "".concat(person.fname, " ").concat(person.lname);
}
var sumit = {
    fname: 'sumit',
    lname: 'joshi'
};
console.log(getFullName(sumit));
