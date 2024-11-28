// function Defination
function Addition(Arr) {
    console.log("Elements of array are :");
    var i = 0;
    var iSum = 0;
    for (i = 0; i < Arr.length; i++) {
        iSum = iSum + Arr[i];
    }
    return iSum;
}
var Marks = [67, 89, 77, 90, 88];
var iRet = 0;
// function call 
iRet = Addition(Marks);
console.log("Addition of array is : " + iRet);
