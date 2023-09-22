import './App.css';
import Cabecalho from './componentes/Cabecalho'
import Conteudo from './componentes/Conteudo2';
import Rodape from './componentes/Rodape';
import Estados from './exemplos/Estados';


/*
Arquivo App JSX
Componente funcional = Porque ele é uma função
*/
function App() {

  /*Todo componente deve retornar um html entre parenteses*/
  return (
    /*O React substitui className por class pq class é palavra reservada do JS*/
    <>
    {/* Nosso cabecalho tem uma propriedade chamada titulo */}
    <Cabecalho logo="logo192.png" titulo="Fav.io" subtitulo="O melhor gerenciador de favoritos da Internet Brasileira!!!"/>
    <Conteudo/>
    {/* <Estados/> */}
    <Rodape/>
    </>
  );
}

export default App;
