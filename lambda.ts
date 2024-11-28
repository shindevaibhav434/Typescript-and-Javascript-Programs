

function Addition(No1: number,No2: number) 
{
    var Sum : number = 0;
    Sum = No1 + No2;
    return Sum;
}

var Result : number = 0;
Result = Addition(10,11);


console.log("Addition is : "+Result);

var Fun = (No1: number, No2:number) => No1 + No2;
Result = Fun(10,11);
console.log("Addition is "+Result);
console.log(typeof Fun);