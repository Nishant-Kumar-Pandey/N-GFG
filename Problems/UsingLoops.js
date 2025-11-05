//--------------------------------------------------- 10 PROBLEMS USING LOOPS ------------------------------------------------------------------------------------//

//---------------------------------------------- 1. Multiplication Table ------------------------------------------------------------//
// Using for loop
for (let i = 1; i<=10; i++){
    console.log("2 x " + i + " =", 2*i);
    
};

console.log("\n");

// Using while loop
let i = 1;
while (i<=10){
    console.log("3 x " + i + " =", 3*i)
    i++;
};

console.log("\n");

//------------------------------------------------ 2. Factorial of a given number -------------------------------------------------------//
// Using for loop

let n = 5;
let fact = 1;

for (let i = 1; i<=n; i++){
    fact *= i;
};

console.log("Factorial of " + n + " is", fact);

console.log("\n");
//----------------------------------------------- 3. Sum of n natural numbers ------------------------------------------------------------//
// using for loop

let x = 10;
let sum = 0;
for (let i = 1; i<=x; i++){
    sum +=i;
};
console.log("Sum of " + x + " is =", sum, "using for loop");

console.log("\n");

// Using while loop
let y = 10;
let summ = 0;
let j = 1;
while (j<=y){
    summ += j;
    j++;
}
console.log("Sum of " + y + " is =", summ, "using while loop");

console.log("\n");

//---------------------------------------------- 4. Reverse a number ------------------------------------------------------------------------//
// usinf while loop
let p = 1234567
let rev = 0;
while(p > 0){
    let digit = p % 10;
    rev = rev * 10 + digit;
    p = Math.floor(p/10);
}
console.log(rev, " Using while loop");

console.log("\n");

//---------------------------------------------- 5. Print even numbers -------------------------------------------------------------------------//
//using for loop
let c = 50;
console.log("USING FOR LOOP ")
for (let i = 1; i<=c; i++){
    if(i%2 == 0){
        console.log(i);
    };
};

console.log("\n");

//using  while loop
let d = 50;
console.log("USING WHILE LOOP ");
while(i<=d){
    if(i%2 == 0){
        console.log(i);
    }
    i++;
}

console.log("\n");

//-------------------------------------------- 6. Count digits in a number ----------------------------------------------------------------------//
// using for loop
let q = 123456789;
let count = 0;
for(; q > 0; q = Math.floor(q/10)){
    count++
   
}
console.log("Number of digits using for loop", count);

//using while loop
let z = 12345;
counnt = 0;
while(z > 0){
    z = Math.floor(z/10);
    counnt++;
}
console.log("Number of digits using while loop", counnt);

console.log("\n");

//--------------------------------------------- 7.Fibonacci Series ---------------------------------------------------------------------------------//
//using for loop
let N = 10;
let w = 0, m = 1, next;
console.log("Fibonacci series using for loop: ");
for(let i = 1; i<= N; i++){
    console.log(w);
    next = w + m;
    w = m;
    m = next;
}
console.log("\n");

//using while loop
let L = 10;
let W = 0, M = 1, nextt;
let countt = 1;
console.log("Fibonacci series using while loop: ");
while(countt <= L){
    console.log(W);
    nextt = W + M;
    W = M;
    M = nextt;
    countt++;
}
console.log("\n");

//----------------------------------------------- 8. Sum of digits --------------------------------------------------------------------------------//
//using for loop
let o = 123456789;
let Summ = 0;
for (; o > 0; o = Math.floor(o/10)){
    Summ += o % 10;     
}
console.log("Sum of digits of a given number using for loop: ", Summ);

//using while loop
let Q = 9876;
let sumM = 0;
while(Q > 0){
    let digiT = Q % 10;
    sumM += digiT;
    Q = Math.floor(Q/10);
}
console.log("Sum of digits of a given number using while loop: ", sumM);

console.log("\n");

//----------------------------------------------- 9. Pattern Printing (Pyramid) -----------------------------------------------------------------------//
//using for loop
let _n = 5; // 

for (let i = 1; i <= n; i++) {
  let row = '';

  for (let j = 1; j <= n - i; j++) {
    row += ' ';
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    row += '*';
  }
  console.log(row);

};
console.log("\n");

//------------------------------------------------ 10. Check Prime Number ----------------------------------------------------------------------------------//
//using for loop

function isPrime(nuum){
    if (nuum <= 1) return false;
    
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(nuum % i === 0){
            return false;
        }
    };
    return true;
};
console.log(isPrime(7), "using for loop")

//using while loop

function isPrime(n){
    if(n <= 1) return false;

    let i = 2;

    while(i <= Math.sqrt(n)){
        if(n % i === 0){
            return false;
        };
        i++;
    };
    return true;
}
console.log(isPrime(13), "using while loop")