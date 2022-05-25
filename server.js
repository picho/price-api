const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3001;

port === undefined 
? console.log('Server doesn`t have port to deploy') 
: crearServidor();

function crearServidor() {
    
    const server = http.createServer(app);

    server.listen(port, '0.0.0.0', () => console.log(`Listening on port ${port}...`));
}