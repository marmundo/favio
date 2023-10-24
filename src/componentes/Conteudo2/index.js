import React, { useState } from "react";
import styles from "./Conteudo.module.css";

const Conteudo = () => {
  const [nomeSite, setNomeSite] = useState("");
  const [url, setUrl] = useState("");
  const [isImportante, setIsImportante] = useState(false);
  const [favoritos, setFavoritos] = useState([]);

  function salvarFavorito() {
    setFavoritos([...favoritos, { nomeSite, url, isImportante }]);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }

  return (
    <>
      <ul>
        {favoritos[0] !== undefined &&
          favoritos.map((favorito) => (
            <li style={favorito.isImportante ? { color: "red" } : {}}>
              {favorito.nomeSite} : {favorito.url}
            </li>
          ))}
      </ul>

      <div className={styles.area}>
        <h1>Conteudo</h1>
        <form className={styles.formulario}>
          <label>Nome do Site</label>
          <h1>{nomeSite}</h1>
          <input
            name="nome_site"
            onChange={(evento) => {
              setNomeSite(evento.target.value);
            }}
          ></input>
          <br />
          <label>URL</label>
          <input
            type="url"
            name="url"
            onChange={(evento) => {
              setUrl(evento.target.value);
            }}
          ></input>
          <br />
          <input
            type="checkbox"
            id="type"
            name="type"
            value={isImportante && "checked"}
            onChange={(e) => setIsImportante(!isImportante)}
          />
          <label for="type" style={{ color: "red" }}>
            Importante
          </label>
          <br />
          <input
            type="button"
            value="Salvar"
            onClick={() => salvarFavorito()}
          />
          {/* <button onClick={(e) =>{e.preventDefault(); salvarFavorito()}}>Salvar</button> */}
        </form>
      </div>
    </>
  );
};

export default Conteudo;
