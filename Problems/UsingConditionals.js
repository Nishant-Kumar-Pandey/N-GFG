//------------------------------------------------------- 10 PROBLEMS USING CONDITIONALS -------------------------------------------------------------------------//

//------------------------------------------ 1. To check Odd & Even -------------------------------------------------------------------------------//
let a = 3;
if(a % 2 === 0){
    console.log(a, "is an even number");
}else{
    console.log(a, "is an odd number");
}

console.log("\n");

//---------------------------------------- 2. Grade Calculator -----------------------------------------------------------------------------------//
let grade = 90;
if(a >= 90){
    console.log("Your grade is A");
}else if(grade >= 80 && grade <= 89){
    console.log("Your grade is B");
}else if(grade >= 70 && grade <= 79){
    console.log("Your grade is C");
}else if(grade >= 60 && grade <= 69){
    console.log("Your grade is D");
}else{
    console.log("your grade is F");
}

console.log("\n");
//--------------------------------------- 3. Leap Year Check -------------------------------------------------------------------------------------//
let year = 2025;
if(year % 400 === 0){
    console.log(year, "is a leap year");
}else if(year % 100 === 0){
    console.log(year, "not a leap year");
}else if(year % 4 === 0){
    console.log(year, "is a leap year");
}else{
    console.log("not a leap year");
}

console.log("\n");

//---------------------------------- 4. Maximun of three numbers --------------------------------------------------------------------------------//
let x = 5, y = 10, z = 3;
if(x > y){
    if(x > z){
        console.log(x, "is the largest number");
    }else{
        console.log(z, "is the largest number");
    }
}
else{
    if(y > z){
        console.log(y, "is the largest number");
    }else{
        console.log(z, "is the largest number");
    }
}

console.log("\n");
//--------------------------------- 5. Check vowels & cosonants ---------------------------------------------------------------------------------//
let vow = "f";
if(vow === "a"){
    console.log(vow, "is a vowel");
}else{
    if(vow === "e"){
        console.log(vow, "is a vowel");
    }else{
        if(vow === "i"){
            console.log(vow, "is a vowel");
        }else{
            if(vow === "o"){
                console.log(vow, "is a vowel");
            }else{
                if(vow === "u"){
                    console.log(vow, "is a vowel");
                }else{
                    console.log(vow, "is a consonant and not a vowel");
                }
            }
        }
    }
}

console.log("\n");

//------------------------------------------ 6. Positive, Negative, or Zero -------------------------------------------------------------------------------//
let num = 0;
if(num > 0){
    console.log(num, "is a positive number");
}else{
    if(num < 0){
        console.log(num, "is a negative number");
    }else{
        console.log(num, "is zero");
    }
}
console.log("\n");

//----------------------------------------- 7. Calculator Program ------------------------------------------------------------------------------------------//
//using switch statements
let num1 = 15, num2 = 35, operator = "+";

switch(operator){
    case "+":
        console.log("Sol:", num1 + num2);
        break;
    
    case "-":
        console.log("sol:", num1 - num2);
        break;
      
    case "*":
        console.log("sol:", num1 * num2);
        break;
    
    case "/":
        if(num2 !== 0){
            console.log("sol:", num1 / num2);
        }else{
            console.log("Error: Cannot divide byr zero!");
        }    
        break;

    case "%":
        console.log("sol:", num1 % num2);
        break;
    default:
        console.log("Invalid operator");        
}

console.log("\n");

//--------------------------------------------- 8. Day of the week -----------------------------------------------------------------------------------------//
const prompt = require("prompt-sync")();
let day = Number(prompt("Enter a number (1-7):"));
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

if (day >= 1 && day <= 7) {
  console.log(days[day - 1]);
} else {
  console.log("Please enter a number between 1 and 7");
}
console.log("\n");

//-------------------------------------------- 9. Eligible to vote ----------------------------------------------------------------------------------------//
let age = 20;
if (age >= 18){
    console.log("You're eligible to vote");
}else{
    console.log("You're not eligible to vote");
}

console.log("\n");

//------------------------------------------ 10. Triangle Type ---------------------------------------------------------------------------------------------//
let s1 = 5, s2 = 5, s3 = 5;
if(s1 === s2){
    if(s2 === s3){
        console.log("Equilateral Triangle");
    }else{
        console.log("Isosceles Triangle");
    }
}else{
    if(s2 === s3 || s1 === s3){
        console.log("Isosceles Triangle");
    }else{
        console.log("Scalene Triangle");
    }
}
