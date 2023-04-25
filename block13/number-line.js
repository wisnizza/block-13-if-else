// change number to be tested here
let num1 = 95;
let num2 = 9;
//calculate num1 and num2
let sum = num1 + num2

//if sum is < -1000
if(sum < -1000){
    //print sum and is anegative number
    console.log(sum+" is anegative number");
//else if sum = 0
} else if(sum === 0){
    //print sum and is equal to 0
    console.log(sum+" is equal to 0");
//else if sum is > 0 and <= 100
} else if (sum > 0 && sum <=100){
    //print sum and is larger than 0
    console.log(sum+" is larger than 0");
//else if sum  > 100
} else if(sum > 100){
    //print sum and is greater than 100
    console.log(sum+" is greater than 100");
//else print undefined
} else {
    console.log("undefined")
}                   