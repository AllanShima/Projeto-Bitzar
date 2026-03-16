import { APITester } from "./APITester";
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";
import { createBrowserRouter, Outlet } from "react-router"; // Criador de Router
import { RouterProvider } from "react-router/dom"; // Renderizador
import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomeHeader from "./pages/HomeHeader";
import ChatPage from "./pages/ChatPage";
import ArchivePage from "./pages/ArchivePage";



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
          path: 'chat',
          element: <ChatPage/>
        },
        {
          path: 'archive',
          element: <ArchivePage/>
        },
      ]
    },
  ]);

  return (
    <div className="w-screen h-screen">
      <RouterProvider router={mainRouter} />
    </div>
  );
}

export default App;
