
function calculateTenPercent(salary) {
    return salary * 0.1;
}
function calculateTenPercent(salary2) {
    return salary2 * 0.2;
}

// function calcuLateTax(salary, cb){
    //     let res = [];
    //     for(let i = 0; i < salary.length; i++){
        //         res.push(cb(salary[i]));
//     }
//     return res;
// }
// let result = calcuLateTax(salary, calculateTenPercent);
// console.log(result);

Array.prototype.calculateTax = function(cb){
    let res = [];
    for(let i = 0; i < this.length; i++){
        res.push(cb(this[i]));
    }
    return res;
}
let salary = [1000, 2000, 3000, 4000];
let salary2 = [1000, 2000, 3000, 4000];
let result = salary.calculateTax(calculateTenPercent);
console.log(result);
console.log(salary2);
console.log("\n");



// IIFE Function

// (function show(){
//     console.log("hi");
// })();
// (function show2(){
//     console.log("hi2");
// })();
 