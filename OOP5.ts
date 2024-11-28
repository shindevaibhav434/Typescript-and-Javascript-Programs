
class Demo 
{
    // characteristics
    No1 : number;
    No2 : number;

    // parametrised constructor
    constructor(A : number,B : number)
    {
        console.log("Inside Default constructor");
        this.No1 = A;
        this.No2 = B;
    }
    // Behaviours
    Display()
    {
        console.log("Inside Disply function of Demo class");
    }
}

var obj1 = new Demo(10,11);
var obj2 = new Demo(20,21);

console.log(obj2.No1);
console.log(obj2.No2);
//obj.Display();
