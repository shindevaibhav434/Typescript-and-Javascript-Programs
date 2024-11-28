function DisplayTime(Div) {
    switch (Div) {
        case "A":
            console.log("Your Exam is at 7 AM");
            break;
        case "B":
            console.log("Your Exam is at 8 AM");
            break;
        case "C":
            console.log("Your Exam is at 9 AM");
            break;
        case "D":
            console.log("Your Exam is at 10 AM");
            break;
            defalut: console.log("wrong input, it should be either A,B,C,D");
    }
}
var Value3 = "C";
DisplayTime(Value3);
