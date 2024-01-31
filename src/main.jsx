import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddProduto from './pages/AddProduto.jsx'
import Carrinho from './components/Carrinho.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"/adicionar-Produto"} element={<AddProduto />} />
        <Route path={"/carrinho"} element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
