import React from 'react'
import { useState } from 'react'

const Estados = () => {


const[texto,setTexto]=useState();

//console.log(texto)

function handleText(e, setTexto) { setTexto(e.target.value);
}

  return (
    <>
     <h1>Estados</h1>
     <h2>{texto}</h2>
     <form>
      <label htmlFor="texto">Texto</label>
      <input name='texto' onChange={(e)=>{handleText(e, setTexto);}}/>
     </form>
    </>
  )
}

export default Estados


