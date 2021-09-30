/* 
1. Get two numbers from users
2. 
If click on add button - add the two numbers
If click on mutiply button - multiply the two numbers
3. Return the numbers to the main program

*/

function Add(n1,n2) {
  let answer = n1 + n2
  return answer
}


add.onclick=function(){
  let num1 = Number(inptNum1.value)
  let num2 = Number(inptNum2.value)
  lbAnswer.value = Add(num1,num2)
}


function Multiply(n1,n2) {
  let answer = n1 * n2
  return answer
}

Multiple.onclick=function(){
  let num1 = Number(inptNum1.value)
  let num2 = Number(inptNum2.value)
  lbAnswer.value = Multiply(num1,num2)
}
