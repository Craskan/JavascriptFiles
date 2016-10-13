function fib(num)
{
  var num1 = 0;
  var num2 = 1;
  var total = 0;
  var totalOdd = 0;
  for(var i = 0; i < num; i++)
  {
   //it's funny how such a simple problem can be so hard to 
    //figure out :), 
    num1 = num2;           
    num2 = total;          
    total = num1 + num2;  

    if(total % 2 === 1)
    {
      totalOdd += total;
    }
  }
 return total;
}
console.log(fib(25));