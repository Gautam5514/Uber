const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000; // Ensure this matches the port your frontend is targeting
const { initializeSocket } = require('./socket');

const server = http.createServer(app);

initializeSocket(server);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
