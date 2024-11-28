
// function Defination
function Addition(Arr : number[]) : number 
{
    console.log("Elements of array are :");
    var i : number = 0;
    var iSum : number = 0;
    for(i = 0; i < Arr.length;i++)
    {
        iSum = iSum + Arr[i];
    }
    return iSum;

}

var Marks : number[] = [67,89,77,90,88];
var iRet : number = 0;

// function call 
iRet = Addition(Marks);
console.log("Addition of array is : "+iRet);