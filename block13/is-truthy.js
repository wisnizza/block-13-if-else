const input = 3;

if(input) {
    console.log("true");
} else if(input === false) {
    console.log("The boolean value false is falsy");
} else if(input === null){
    console.log("The null value is falsy");
} else if(input === ""){
    console.log("The empty string is falsy");
} else if(input === 0){
    console.log("The number 0 is falsy (the only falsy number)");
}  else if (input === undefined){
    console.log("undeined is falsy");
 }

