
function Display1() : void
{
    var iCnt : number = 0;
    var iNo : number = 5;

    iCnt = 1;  // 1
    // 2
    while(iCnt <= iNo)
    {
        console.log(iCnt);  // 4
        iCnt++;  // 3
    }
}

Display1();