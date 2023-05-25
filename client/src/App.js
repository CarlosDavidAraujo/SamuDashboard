import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { IoProvider } from "socket.io-react-hook";
import { Navbar } from "./shared/components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar>
        <RouterProvider router={router} />
      </Navbar>
    </>
  );
}

export default App;
