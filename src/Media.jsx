import style from './Media.module.css'
import { useState } from 'react'


export default function Media(){
    const [n1, setN1] = useState('')
    const [n2, setN2] = useState('')
    const [n3, setN3] = useState('')
    const [n4, setN4] = useState('')
    const [n5, setN5] = useState('')
   const  [respMedia, setRespMedia] = useState('')
   

const media = () => setRespMedia(parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4) + parseFloat(n5) / 5)



    return (
        <>
            <h5><a href={"/"} className={style.backBtn}>Voltar</a></h5>
            <h1>Nota do aluno</h1>
            <br />
            <div>
                <h4>Digite sua nota</h4>
                <input type="number" value={n1} onChange={(e) => setN1(e.target.value)} placeholder='Primeira nota' />
                <input type="number" value={n2} onChange={(e) => setN2(e.target.value)} placeholder='Segunda nota' />
                <input type="number" value={n3} onChange={(e) => setN3(e.target.value)} placeholder='Teiceira nota' />
                <input type="number" value={n4} onChange={(e) => setN4(e.target.value)} placeholder='Quarta nota' />
                <input type="number" value={n5} onChange={(e) => setN5(e.target.value)} placeholder='Quinta nota' />
            </div>
            <div>
                <h4>Calculo media</h4>
                <p>
                    <button onClick={media}>Media</button>
                    {n1 > 10 || n2 > 10 || n3 > 10 || n4 > 10 || n5 > 10 ? 'Nota maior que 10'
                    : n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0 || n5 < 0 ? "Nota 0 adicionada"
                : !isNaN(respMedia) && isFinite(respMedia) ? respMedia : "Erro, digite um numerio validos! "}
                </p>
            </div>
        </>
    )
}