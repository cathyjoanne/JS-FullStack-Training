//first typescript
var i = 0;
while (true) {
    i++;
    if (i === 5 || i === 7 || i === 9) {
        continue;
    }
    if (i === 11) {
        break;
    }
    console.log(i);
}
