import { useEffect, useState } from "react";
import style from "./Req.module.css";
import { apiRick } from "./api/api";
import { Card } from "./components/card";
import { Modal } from "bootstrap";
import ModalInfo from "./components/modalinfo";
import Tilt from "react-parallax-tilt";

export default function Req() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState([""]);
  // const [searchName, setSearchName] = useState()
  const [modal, setModal] = useState();

  const [erro, setErro] = useState(false);

  //charecter = endpoint
  useEffect(() => {
    apiRick
      .get(`/character/?page=${page}`)
      .then((res) => {
        setData(res.data.results);
      })
      .catch((error) => {
        if (error.res.status === 404) {
          setErro(true);
        }
        console.error(error);
      });
  }, [page]);

  return (
    <>
      {modal !== undefined && (
        <ModalInfo data={data[modal]} close={() => setModal()} />
      )}
      <section className={style.wrapPage}>
        <h1 className={style.titleName}>Rick and Morty Api</h1>
        <input
          className={style.input}
          style={{ width: "330px", marginRight: "10px", padding: "10px" }}
          type="text"
          placeholder="Digite uma pagina 1 a 42"
          value={page}
          onChange={(e) => setPage(e.target.value)}
        />
        {erro && <p>Pagina nao encontrada</p>}

        {/* <input  className={style.input}  style={{ width: "330px", padding: "10px"}}  type="text" placeholder='Digite um nome' value={searchName} onChange={(e) => setSearchName(e.target.value)} /> */}
        <div className={style.wrapCrads}>
          {data.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                    border: "2px solid white",
                  }}
                >
                  <Tilt>
                    <Card name={item.name} image={item.image} />
                  </Tilt>
                </div>
                <button onClick={() => setModal(index)}>
                  Info = {item.nome}
                </button>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
