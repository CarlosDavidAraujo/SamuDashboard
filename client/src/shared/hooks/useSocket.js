import { useEffect, useState } from "react";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";

export const useSocket = (eventName) => {
  const [data, setData] = useState([]);
  const { lastMessage } = useWebSocket(process.env.REACT_APP_SOCKET_API_URL, {
    share: true,
    onOpen: () => console.log(`Connected to App WS`),
    //queryParams: { 'token': '123456' },
    onError: (event) => {
      console.error(event);
    },
    shouldReconnect: (closeEvent) => true,
    reconnectInterval: 3000,
  });

  useEffect(() => {
    console.log(process.env.REACT_APP_SOCKET_API_URL);
    if (lastMessage !== null) {
      const message = JSON.parse(lastMessage.data);
      if (message.event === eventName) {
        console.log(message.data);
        setData(message.data);
      }
    }
  }, [lastMessage, setData, eventName]);

  return data;
};
