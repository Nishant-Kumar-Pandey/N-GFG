// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("success");
//     }, 2000);
// });

// promise1.then((data) => {
//     console.log("Promise resolved")
// })

// .catch((err) => {
//     console.log("error", err);
// });

// .finally(() => {
//     console.log("Promise is settled");
// });



// fetch("https://dummyjson.com/products").then((response) => {
//     return response.json().catch((err) => {
//         console.log("error in parsing json", err);
//     }).finally(() => {
//         console.log("fetch operation completed");
//     }   );
// });

let promise1 = Promise.resolve("Successful");
let promise2 = Promise.resolve("2nd-Successful");
let promise3 = Promise.reject("rejected");

//first method Promise.all

Promise.all([promise1, promise2, promise3])
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log( err);
});

//second method Promise.allSettled
Promise.allSettled([promise1, promise2, promise3])
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log( err);
});

//third method Promise.race
Promise.race([promise1, promise2, promise3])
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log( err);
});


//fourth method Promise.any
Promise.any([promise1, promise2, promise3])
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log( err);
});

async function fetchData(){
    const response = await fetch("https://dummyjson.com/products");
    console.log(response);
    console.log("ffafa");
}
fetchData();