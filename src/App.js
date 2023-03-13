import CustomForm from "./components/Auth/Form";
import Login from "./components/Auth/Login";
import List from "./pages/List";
import ClientFormSignup from "./components/Auth/clientFormSignup";
import CustomNavbar from "./components/navbars/CustomNavbar";
import { lineStyle } from "./styles";
import LoginPage from "./Google";
import Home from "./components/home";
import "./App.css";
import Profile from "./components/profile";
import ClientSpace from "./pages/ClientSpace";
import CompanySpace from "./pages/CompanySpace";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardCompany from "./pages/DashboardCompany";

function App() {
  const routes = [
    { path: "/", element: <Login /> },
    { path: "/list", element: <List /> },
    { path: "/create-account", element: <CustomForm /> },
    { path: "/create-account-client", element: <ClientFormSignup /> },
    { path: "/login-google", element: <LoginPage /> },
    {
      path: "/home",
      element: <Home />,
    },
    { path: "/profile", element: <Profile /> },
    { path: "/client-space", element: <ClientSpace /> },
    {
      path: "/company-space",
      element: <CompanySpace />,
      children: [{ path: "dashboard", element: <DashboardCompany /> }],
    },
  ];
  const router = createBrowserRouter(routes);
  const isAuth = true;
  return (
    <>
      <div className="App">
        {!isAuth && <CustomNavbar />}
        <RouterProvider router={router} />
        {/*    <Profile /> */}
      </div>
    </>
  );
}

export default App;
