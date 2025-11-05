//global scope
// block scope
// {
//     let a = 20;
//     const ab= 10;
//     var c = 40;
// }
// console.log(a,b,c);

// function scope
// function test(){
//     var a = 10;
// }
// console.log(a);
// test();

// lexical scope checks in a heirarchial manner and will be asked as lexical environment because socpe is reach and reach is within the environment
let a = 10;
function outer(){
    function inner(){
        let a = 20;
    }
    inner();
}
outer();