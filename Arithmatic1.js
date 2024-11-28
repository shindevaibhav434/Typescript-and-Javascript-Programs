var Arithmatic = /** @class */ (function () {
    function Arithmatic(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arithmatic.prototype.Addition = function () {
        var Ans;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithmatic.prototype.Substraction = function () {
        var Ans;
        Ans = this.No1 - this.No2;
        return Ans;
    };
    return Arithmatic;
}());
var obj = new Arithmatic(11, 10);
var obj2 = new Arithmatic(25, 21);
console.log(obj.No1);
console.log(obj.No2);
var Result = 0;
Result = obj.Addition();
console.log(Result);
Result = obj2.Substraction();
console.log(Result);
