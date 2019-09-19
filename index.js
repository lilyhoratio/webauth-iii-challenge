const server = require("./server.js");

const port = process.env.PORT || 4446;

server.listen(port, () => console.log(`\n\nSERVER UP!\n\n`));
