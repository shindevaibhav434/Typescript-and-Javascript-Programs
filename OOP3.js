var Demo = /** @class */ (function () {
    function Demo() {
        console.log("Inside Default constructor");
        this.No1 = 0;
        this.No2 = 0;
    }
    // Behaviours
    Demo.prototype.Display = function () {
        console.log("Inside Disply function of Demo class");
    };
    return Demo;
}());
var obj = new Demo();
obj.Display();
console.log(obj.No1);
console.log(obj.No2);
