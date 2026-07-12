import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import { UsersProvider } from "./context/UsersContext";

function App() {
  return (
    <UsersProvider>
      <RouterProvider router={router} />
    </UsersProvider>
  );
}

export default App;
