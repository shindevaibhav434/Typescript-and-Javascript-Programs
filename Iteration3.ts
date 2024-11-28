
function Display2() : void
{
    var iCnt : number = 0;
    var iNo : number = 10;

    iCnt = 1;  // 1
    
    do
    {
        console.log(iCnt);  // 4
        iCnt++;  // 3
    }while(iCnt <= iNo);  // 2
}

Display2();