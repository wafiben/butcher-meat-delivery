import CustomForm from "./components/Auth/Form";
import Login from "./components/Auth/Login";
import List from "./pages/List";
import ClientFormSignup from "./components/Auth/clientFormSignup";
import CustomNavbar from "./components/Auth/CustomNavbar";
import { lineStyle } from "./styles";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const routes = [
    { path: "/", element: <Login /> },
    { path: "/list", element: <List /> },
    { path: "/create-account", element: <CustomForm /> },
    { path: "/create-account-client", element: <ClientFormSignup /> },
  ];
  const router = createBrowserRouter(routes);
  return (
    <>
      <div className="App">
        <CustomNavbar />
        <RouterProvider router={router} />;
      </div>
    </>
  );
}

export default App;
