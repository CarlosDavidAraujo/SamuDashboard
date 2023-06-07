const WebSocket = require("ws");
const { v4: uuidv4 } = require('uuid');
const handleOcorrencia = require("./socketHandlers/ocorrenciaHandler");

// Armazena as conexões ativas
const clients = {};

function generateUniqueID() {
  return uuidv4();
}

function onError(ws, err) {
  console.error(`onError: ${err.message}`);
}

function onMessage(ws, data) {
  console.log(`onMessage: ${data}`);
  ws.send(`recebido!`);
}

function onConnection(ws, req) {
  ws.on("message", (data) => onMessage(ws, data));
  ws.on("error", (error) => onError(ws, error));
  console.log(`onConnection`);

  // Gera um ID único para o cliente
  const clientID = generateUniqueID();

  // Armazena a conexão no objeto clients usando o ID único como chave
  clients[clientID] = ws;

  // Atualiza o console dos clientes com a lista de IDs
  const activeClients = Object.keys(clients);
  console.log("Active clients:", activeClients);

  //envio inicial dos dados
  handleOcorrencia(ws);

  // Define o intervalo para atualização periódica dos envios subsequentes
  const interval = setInterval(() => {
    handleOcorrencia(ws);
  }, 50000);

  // Manipula o evento de fechamento da conexão
  ws.on("close", function () {
    console.log("Connection closed", clientID);

    // Limpa o intervalo quando a conexão é fechada
    clearInterval(interval);

    // Remove a conexão do objeto clients usando o ID único
    delete clients[clientID];
  });
}

module.exports = (server) => {
  const wss = new WebSocket.Server({
    server,
  });

  wss.on("connection", onConnection);

  console.log(`App Web Socket Server is running!`);
  return wss;
};
