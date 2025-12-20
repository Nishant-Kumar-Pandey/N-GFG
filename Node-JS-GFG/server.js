import http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.end('hi from server');
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})