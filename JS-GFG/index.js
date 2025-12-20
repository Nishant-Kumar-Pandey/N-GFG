// console.log("Hello world")
// function test(){
//     var a = 20;
//     console.log(a);
// }
// console.log(a)

// export default function fetchData(url){
//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => {
//         console.log(err)
//     })
//     .finally(() => {
//         console.log("api called")
//     });
// }

import http from 'http'; // importing http
const PORT = 3000;
const server = http.createServer((req, res) => {
    // console.log(req.url);
    // console.log(req.method);
    console.log(res.headers);
    res.end("Hello from the server");
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
}); 