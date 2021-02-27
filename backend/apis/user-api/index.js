const app = require('./app');
const { port } = require('./keys');

app.listen(port, () => console.log("User API listening on port", port));