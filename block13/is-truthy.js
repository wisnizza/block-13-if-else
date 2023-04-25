//change the value of the input to be tested here
const input = "hello";

// if input is true 
if(input) {
    //print true
    console.log("true");
//else if input is false
} else if(input === false) {
    //print The boolean value false is falsy
    console.log("The boolean value false is falsy");
//else if input is null 
} else if(input === null){
    //print The null value is falsy
    console.log("The null value is falsy");
//else if input is null
} else if(input === ""){
    //print The empty string is falsy
    console.log("The empty string is falsy");
//else if input is 0
} else if(input === 0){
    //print The number 0 is falsy (the only falsy number)
    console.log("The number 0 is falsy (the only falsy number)");
//else if input is undefined
}  else if (input === undefined){
    //print undeined is falsy
    console.log("undefined is falsy");
}

