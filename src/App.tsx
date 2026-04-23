import { APITester } from "./APITester";
import "./index.css";
import { createBrowserRouter, Navigate, Outlet } from "react-router"; // Criador de Router
import { RouterProvider } from "react-router/dom"; // Renderizador
import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomeHeader from "./pages/HomeHeader";
import ChatPage from "./pages/ChatPage";
import ArchivePage from "./pages/ArchivePage";
import Login from "./pages/Login";
import TeamInfoPage from "./pages/TeamPage";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import TeamRegisterPage from "./pages/TeamRegisterPage";

export function App() {
  
  const mainRouter = createBrowserRouter([
    // Caminho Padrão
    {
      //index: true, // Default child route
      path: '/',
      element: <LandingPage/>,
      errorElement: <NotFoundPage/>,
    },
    {
      path: '/home',
      element: <Home/>,
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/register',
      element: <Register/>
    },
    {
      path: '/teamregister',
      element: <TeamRegisterPage/>
    },
  ]);

  return (
    <div className="flex flex-col w-screen h-screen bg-gray-100">
      <RouterProvider router={mainRouter} />
      <Toaster/>
    </div>
  );
}

export default App;
