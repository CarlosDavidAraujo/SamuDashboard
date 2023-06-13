import { useEffect, useState } from "react";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";

/**
 * Hook para abrir uma comunicação via socket com o backend
 * @param {*} eventName O nome do evento que será disparado no backend
 * @returns {Object} Um objeto com os dados retornados pelo backend
 */
export const useSocket = (eventName) => {
  //estado para guardar os dados
  const [data, setData] = useState([]);

  //configuração da comunicação via socket, consutlar documentação do rect-use-websocket
  const { lastMessage } = useWebSocket(process.env.REACT_APP_SOCKET_API_URL, {
    share: true,
    onOpen: () => console.log(`Connected to App WS`),
    onError: (event) => {
      console.error(event);
    },
    shouldReconnect: (closeEvent) => true,
    reconnectInterval: 3000,
  });

  useEffect(() => {
    if (lastMessage !== null) {
      //obetem os dados retornados pelo backend
      const message = JSON.parse(lastMessage.data);

      //se o evento da mensagem for o mesmo passado no parametro do hook salva os dados no estado 'data'
      if (message.event === eventName) {
        setData(message.data);
      }
    }
  }, [lastMessage, eventName]);

  console.log(data);

  //retorna os dados
  return data;
};
