import { useEffect, useState } from "react";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";

export const useSocket = (eventName) => {
  const [data, setData] = useState([]);
  const socketUrl = "ws://localhost:3001";

  const { lastMessage } = useWebSocket(socketUrl, {
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
    if (lastMessage !== null) {
      const message = JSON.parse(lastMessage.data);
      if (message.event === eventName) {
        console.log(message.data);
        setData(message.data);
      }
    }
  }, [lastMessage, setData]);

  return data;
};
