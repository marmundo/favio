import React from 'react'
import Cabecalho from '../../componentes/Cabecalho'
import Conteudo from '../../componentes/Conteudo2';
import Rodape from '../../componentes/Rodape';
const Principal = () => {
  return (
       // /*O React substitui className por class pq class é palavra reservada do JS*/
  <>
  // {/* Nosso cabecalho tem uma propriedade chamada titulo */}
  <Cabecalho logo="logo192.png" titulo="Fav.io" subtitulo="O melhor gerenciador de favoritos da Internet Brasileira!!!"/>
  <Conteudo/>
  <Rodape/>
  </>
  )
}

export default Principal