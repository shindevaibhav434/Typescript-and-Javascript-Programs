var Demo = /** @class */ (function () {
    // parametrised constructor
    function Demo(A, B) {
        console.log("Inside Default constructor");
        this.No1 = A;
        this.No2 = B;
    }
    // Behaviours
    Demo.prototype.Display = function () {
        console.log("Inside Disply function of Demo class");
    };
    return Demo;
}());
var obj1 = new Demo(10, 11);
var obj2 = new Demo(20, 21);
console.log(obj2.No1);
console.log(obj2.No2);
//obj.Display();
