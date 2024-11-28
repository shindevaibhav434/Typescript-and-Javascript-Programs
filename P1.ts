var no:number = 10;
var i:number = 0;

console.log("Display no 1 to 10");
console.log("Inside for loop");
for(i = 1; i <=no;i++)
{
    console.log(i);
}

console.log("inside while loop");
i = 1;
while(i <= no)
{
    console.log(i);
    i++;
}

console.log("Inside do-while loop");
var itr : number = 1;
do
{
    console.log(itr);
    itr++;
}while(itr <= no);