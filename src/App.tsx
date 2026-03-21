import { APITester } from "./APITester";
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";
import { createBrowserRouter, Navigate, Outlet } from "react-router"; // Criador de Router
import { RouterProvider } from "react-router/dom"; // Renderizador
import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomeHeader from "./pages/HomeHeader";
import ChatPage from "./pages/ChatPage";
import ArchivePage from "./pages/ArchivePage";
import Login from "./pages/Login";



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
      element: (
        <>
          <HomeHeader/>
          <Outlet/>
        </>
      ),
      children: [
        {
          index: true, 
          element: <Navigate to="chat" replace /> 
        },
        {
          path: 'chat',
          element: <ChatPage/>
        },
        {
          path: 'archive',
          element: <ArchivePage/>
        },
      ]
    },
    {
      path: '/login',
      element: <Login/>
    },
  ]);

  return (
    <div className="flex flex-col w-screen h-screen">
      <RouterProvider router={mainRouter} />
    </div>
  );
}

export default App;
