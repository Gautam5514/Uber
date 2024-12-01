const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000; // Ensure this matches the port your frontend is targeting

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
