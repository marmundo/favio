import React, { useState } from "react";
import styles from "./Conteudo.module.css";

const Conteudo = () => {
  const [nomeSite, setNomeSite] = useState("");

  return (
    <div className={styles.area}>
      Conteudo
      <form
        className={styles.formulario}
        onSubmit={() => alert("Favorito salvo")}
      >
        <label>Nome do Site</label>
        <input
          name="nome_site"
          onChange={(evento) => {
            setNomeSite(evento.target.value);
            console.log(nomeSite);
          }}
        ></input>
        <br />
        <label>URL</label>
        <input type="url" name="url"></input>
        <br />
        <button>Salvar</button>
      </form>
    </div>
  );
};

export default Conteudo;
