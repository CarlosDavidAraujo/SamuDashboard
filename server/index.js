const app = require('./app');
const appWs = require('./app-ws');

const port = 3001

const server = app.listen(process.env.PORT || port, () => {
    console.log(`App Express is running on port ${port}`);
})

appWs(server);