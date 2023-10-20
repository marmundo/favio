import './App.css';
import Cabecalho from './componentes/Cabecalho'
import CadastroUsuario from './componentes/CadastroUsuario';
import Login from './componentes/Login';
import Conteudo from './componentes/Conteudo2';
import Rodape from './componentes/Rodape';


/*
Arquivo App JSX
Componente funcional = Porque ele é uma função
*/
function App() {
  return (
      // /*O React substitui className por class pq class é palavra reservada do JS*/
  <>
  // {/* Nosso cabecalho tem uma propriedade chamada titulo */}
  <Cabecalho logo="logo192.png" titulo="Fav.io" subtitulo="O melhor gerenciador de favoritos da Internet Brasileira!!!"/>
  <Conteudo/>
  <CadastroUsuario/>
  <Login/>
  // {/* <Estados/> */}
  <Rodape/>
  </>
  );
}


export default App;
