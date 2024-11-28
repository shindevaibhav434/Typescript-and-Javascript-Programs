function Demo() {
    var languages = ["C", "C++", "jAVA", "PYTHON"];
    return languages;
}
var Arr;
Arr = Demo();
console.log("Elements of array are :");
var i = 0;
for (i = 0; i < Arr.length; i++) {
    console.log(Arr[i]);
}
