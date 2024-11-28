
class Demo 
{
    // characteristics
    No1 : number;
    No2 : number;

    // parametrised constructor
    constructor(A :number,B:Number)
    {
        console.log("Inside Default constructor");
        this.No1 = 0;
        this.No2 = 0;
    }
    // Behaviours
    Display()
    {
        console.log("Inside Disply function of Demo class");
    }
}

var obj1 = new Demo(10,11);
var obj2 = new Demo(20,21);
obj.Display();
console.log(obj.No1);
console.log(obj.No2);