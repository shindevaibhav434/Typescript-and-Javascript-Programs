function Demo() : string[]
{
    var languages : string[] = ["C","C++","jAVA","PYTHON"];
    return languages;
}

var Arr : string[];
Arr = Demo();

console.log("Elements of array are :");
var i : number = 0;

for(i = 0; i < Arr.length; i++)
{
    console.log(Arr[i]);
}