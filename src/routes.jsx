import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Principal from './paginas/Principal'
import CadastroUsuario from './paginas/CadastroUsuario'
import Login from './paginas/Login'

const Rotas = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Principal/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/cadastro" element={<CadastroUsuario/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default Rotas;