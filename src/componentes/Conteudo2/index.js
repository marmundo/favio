import React, { useState } from "react";
import styles from "./Conteudo.module.css";

const Conteudo = () => {
  const [nomeSite, setNomeSite] = useState("");
  const [url, setUrl] = useState("");
  const [isImportante, setIsImportante] = useState(false);
  const [favoritos, setFavoritos] = useState([]);

  function isInFavoritos(nomeSite) {
    return favoritos.findIndex((favorito) => {
      return favorito.nomeSite === nomeSite;
    });
  }

  function salvarFavorito() {
    const novoFavorito = { nomeSite, url, isImportante };
    const indexInFavorites = isInFavoritos(nomeSite);
    if (indexInFavorites === -1) setFavoritos([...favoritos, novoFavorito]);
    else {
      favoritos[indexInFavorites] = novoFavorito;
      setFavoritos([...favoritos]);
    }
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }

  function editFavorito(nomeSite) {
    let favoritoFiltrado = favoritos.filter((favorito) => {
      return favorito.nomeSite === nomeSite;
    });
    favoritoFiltrado = favoritoFiltrado[0];
    setNomeSite(favoritoFiltrado.nomeSite);
    setUrl(favoritoFiltrado.url);
    setIsImportante(favoritoFiltrado.isImportante);
  }

  return (
    <>
      <ul>
        {favoritos[0] &&
          favoritos.map((favorito) => (
            <li
              key={favorito.nomeSite}
              onClick={() => editFavorito(favorito.nomeSite)}
              style={favorito.isImportante ? { color: "red" } : {}}
            >
              {favorito.nomeSite} : {favorito.url}:{favorito.isImportante}
            </li>
          ))}
      </ul>

      <div className={styles.area}>
        <h1>Conteudo</h1>
        <form className={styles.formulario}>
          <label>Nome do Site</label>
          <input
            name="nome_site"
            value={nomeSite}
            onChange={(evento) => {
              setNomeSite(evento.target.value);
            }}
          ></input>
          <br />
          <label>URL</label>
          <input
            type="url"
            name="url"
            value={url}
            onChange={(evento) => {
              setUrl(evento.target.value);
            }}
          ></input>
          <br />
          <input
            type="checkbox"
            id="type"
            name="type"
            checked={isImportante}
            onChange={(e) => setIsImportante(!isImportante)}
          />
          <label htmlFor="type" style={{ color: "red" }}>
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
