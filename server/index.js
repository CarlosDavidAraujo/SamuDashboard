require('dotenv').config();
const app = require('./app');
const appWs = require('./app-ws');

const port = process.env.PORT || 4000;

const server = app.listen(port,  () => {
    console.log(`App Express is running on port ${port}`);
})

appWs(server);