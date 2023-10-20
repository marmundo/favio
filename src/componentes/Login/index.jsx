import React, { useState } from 'react'
import styles from "../Conteudo/Conteudo.module.css";

const Login = () => {

    const [email,setEmail]=useState('')
    const [senha,setSenha]=useState('')


    function handleEmail(e){
        setEmail(e.target.value)
    }
    function handleSenha(e){
        setSenha(e.target.value)
    }
    function handleSubmit(e){
       const user=JSON.parse(localStorage.getItem('user'))
       console.log(user)
       if (user!=null){
        console.log(user.email)
        console.log(user.senha)
        if(email==user.email && senha==user.senha){
            alert("Usuário Logado")
        }else{
            alert("Erro nas credenciais. Tente Novamente!")
        }
       }
    }

  return (
        <div id="div-cadastro-usuario" className={styles.conteudo}>
          <h1>Login</h1>
          <form>
            <label htmlFor="cadastro_nome">Email</label>
            <input type="text" onChange={(e) => handleEmail(e)} />
            <br/>            <label htmlFor="cadastro_email">Senha</label>
            <input type="text" onChange={(e) => handleSenha(e)} />
            <br/> 
           
            <button onClick={(e)=>{
                e.preventDefault();
                handleSubmit(e)
            }}>Login</button>
          </form>
        </div>
      );
}

export default Login