function Addition(No1, No2) {
    var Sum = 0;
    Sum = No1 + No2;
    return Sum;
}
var Result = 0;
Result = Addition(10, 11);
console.log("Addition is : " + Result);
var Fun = function (No1, No2) { return No1 + No2; };
Result = Fun(10, 11);
console.log("Addition is " + Result);
console.log(typeof Fun);
