var Demo = /** @class */ (function () {
    function Demo() {
    }
    // Behaviours
    Demo.prototype.Display = function () {
        console.log("Inside Disply functio id Demo class");
    };
    return Demo;
}());
var obj = new Demo();
obj.Display();
