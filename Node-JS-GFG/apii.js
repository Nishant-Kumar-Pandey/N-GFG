//REST
//layered system
//stateless
//cacheable
//code on demand
//client-server architecture 

import express from 'express';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 3000;
  

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node.js API Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen p-8 font-sans text-gray-800">
    <div class="max-w-6xl mx-auto space-y-10">
        <header class="text-center">
            <h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">API Dashboard</h1>
            <p class="mt-2 text-gray-600">Interactive interface for testing Node.js Express endpoints</p>
        </header>

        <!-- Login Section -->
        <section class="bg-white rounded-xl shadow-lg p-6">
            <h2 class="text-2xl font-bold mb-4 text-indigo-700 flex items-center gap-2">
                <span>🔐</span> POST /login
            </h2>
            <div class="grid md:grid-cols-2 gap-8">
                <form id="loginForm" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Username</label>
                        <input type="text" name="username" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 p-2 border" placeholder="Enter username">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" name="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 p-2 border" placeholder="Enter password">
                    </div>
                    <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200 font-medium shadow-md">
                        Send Request
                    </button>
                </form>
                <div class="bg-gray-900 rounded-lg p-4 overflow-auto text-sm font-mono text-green-400 shadow-inner min-h-[150px]" id="loginResponse">
                    // Response will appear here...
                </div>
            </div>
        </section>

        <!-- Product Section -->
        <section class="bg-white rounded-xl shadow-lg p-6">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold text-purple-700 flex items-center gap-2">
                    <span>📦</span> GET /product
                </h2>
                <button id="fetchProducts" class="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition duration-200 font-medium shadow-md flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Fetch Data
                </button>
            </div>
            
            <div id="productGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="col-span-full text-center text-gray-400 py-10 italic">
                    Click "Fetch Data" to load products...
                </div>
            </div>
        </section>
    </div>

    <script>
        // Login Handler
        document.getElementById('loginForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            const responseBox = document.getElementById('loginResponse');
            
            responseBox.innerHTML = '<span class="animate-pulse">Sending request...</span>';
            
            try {
                const res = await fetch('/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                const result = await res.json();
                responseBox.textContent = JSON.stringify(result, null, 2);
            } catch (err) {
                responseBox.textContent = 'Error: ' + err.message;
                responseBox.classList.replace('text-green-400', 'text-red-400');
            }
        });

        // Product Fetch Handler
        document.getElementById('fetchProducts').addEventListener('click', async () => {
            const grid = document.getElementById('productGrid');
            grid.innerHTML = '<div class="col-span-full flex justify-center py-10"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>';

            try {
                const res = await fetch('/product');
                const data = await res.json();
                
                grid.innerHTML = '';
                
                if (Array.isArray(data)) {
                    data.forEach(item => {
                        const card = document.createElement('div');
                        card.className = 'bg-gray-50 rounded-lg border border-gray-200 p-5 hover:shadow-md transition duration-200 flex flex-col gap-2';
                        
                        // Generate a random color for the avatar based on ID or name
                        const colors = ['bg-red-100 text-red-600', 'bg-blue-100 text-blue-600', 'bg-green-100 text-green-600', 'bg-yellow-100 text-yellow-600', 'bg-pink-100 text-pink-600'];
                        const colorClass = colors[(item.id || 0) % colors.length];
                        
                        card.innerHTML = \`
                            <div class="flex items-start justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-full \${colorClass} flex items-center justify-center font-bold text-sm">
                                        \${(item.first_name?.[0] || item.name?.[0] || '?').toUpperCase()}
                                    </div>
                                    <div>
                                        <h3 class="font-bold text-gray-800">\${item.first_name || 'Unknown'} \${item.last_name || ''}</h3>
                                        <p class="text-xs text-gray-500">ID: \${item.id}</p>
                                    </div>
                                </div>
                                <span class="px-2 py-1 bg-white border rounded text-xs font-mono text-gray-500">\${item.gender || 'N/A'}</span>
                            </div>
                            <div class="mt-2 space-y-1">
                                <div class="flex items-center gap-2 text-sm text-gray-600">
                                    <svg class="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    <span class="truncate">\${item.email || 'No email'}</span>
                                </div>
                                <div class="flex items-center gap-2 text-sm text-gray-600">
                                    <svg class="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    <span class="font-mono text-xs">\${item.ip_address || '0.0.0.0'}</span>
                                </div>
                            </div>
                        \`;
                        grid.appendChild(card);
                    });
                } else {
                    grid.innerHTML = '<div class="col-span-full text-center text-red-500">Received data is not an array.</div>';
                }
            } catch (err) {
                grid.innerHTML = \`<div class="col-span-full text-center text-red-500">Error fetching data: \${err.message}</div>\`;
            }
        });
    </script>
</body>
</html>
    `);
});

app.get("/home", (req, res) => {
    res.status(200).send('Welcome to the home page');
});


app.get("/product", (req, res) => {
    fs.readFile("./MOCK_DATA.json", (err, data) => {
        if(err){
            return res.status(400).send({error: "something went wrong"})
        }
        res.status(200).send(data);
    });
});
app.post("/login", (req, res) => {
      const username = req.body.username;
    const password = req.body.password;
    // const { username, password } = req.body;
    res.status(200).json({ username, password });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});