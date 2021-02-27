const app = require('./app');
const { port } = require('./keys');

app.listen(port, () => console.log("Server listening on port", port));