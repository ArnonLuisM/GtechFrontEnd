import Header from "./components/Header"
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import HomePage from "./pages/HomePage";

/* Eu ajeitei as rotas do projeto já, podem continuar a testar os componentes aqui, mas quando forem criar as páginas, olhem lá no router/AppRoutes :D */

function App() {  

  return (
    <>
      <HomePage/>
    </>
  )
}

export default App
