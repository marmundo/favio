import React, { useState } from 'react'
import styles from "../../componentes/Conteudo/Conteudo.module.css";

const CadastroUsuario = () => {

    const [nome,setNome]=useState('')
    const [email,setEmail]=useState('')
    const [senha,setSenha]=useState('')
    const [confirmacaoSenha,setconfirmacaoSenha]=useState('')

    function handleNome(e){
        setNome(e.target.value)
    }
    function handleEmail(e){
        setEmail(e.target.value)
    }
    function handleSenha(e){
        setSenha(e.target.value)
    }
    function handleConfirmacaoDeSenha(e){
        setconfirmacaoSenha(e.target.value)
    }

    function handleSubmit(e){
        if(senha==confirmacaoSenha){
            const user={nome,email,senha}
            localStorage.setItem('user',JSON.stringify(user))
        }else{
            alert("As senhas não coincidem")
        }
    }

  return (
        <div id="div-cadastro-usuario" className={styles.conteudo}>
          <h1>Cadastro de Usuário</h1>
          <form>
            <label htmlFor="cadastro_nome">Nome</label>
            <input type="text" onChange={(e) => handleNome(e)} />
            <br/>            <label htmlFor="cadastro_email">Email</label>
            <input type="text" onChange={(e) => handleEmail(e)} />
            <br/> 
            <label htmlFor="cadastro_senha">Senha</label>
            <input type="text" onChange={(e) => handleSenha(e)} />
            <br/> 
            <label htmlFor="cadastro_confirmacaoSenha">Confirmação de Senha</label>
            <input type="text" onChange={(e) => handleConfirmacaoDeSenha(e)} />
            <br/> 
            <button onClick={(e)=>{
                e.preventDefault();
                handleSubmit(e)
            }}>Salvar Usuario</button>
          </form>
        </div>
      );
}

export default CadastroUsuario