const ModalInfo = ({data, close}) => {
    return(
        <div style={{position: "fixed",  left: "50%", top: "35%", transform: "translate(-50%, -35%)", background: "black", color: "white", zIndex: "999px"}}>
            <button onClick={close}>❌</button>
            <img src={data.image} alt={data.nome} />
            <h1><Strong>Name.</Strong>{data.nome}</h1>
            <p><Strong>Status.</Strong>{data.status}</p>
            <p><Strong>Origin.</Strong>{data.origin.name}</p>
            <p><Strong>Species.</Strong>{data.species}</p>
            <p><Strong>Gender.</Strong>{data.gender}</p>
            <p><Strong>Location.</Strong>{data.location.nome}</p>
            <p><strong>Created.</strong>{new Date(data.created).toLocaleString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            minute: "numeric",
            second: "numeric"
            })}</p>
        </div>
    )
}

export default ModalInfo    