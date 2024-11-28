
class Demo 
{
    // characteristics
    No1 : number;
    No2 : number;

    constructor()
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

var obj = new Demo();

obj.Display();
console.log(obj.No1);
console.log(obj.No2);