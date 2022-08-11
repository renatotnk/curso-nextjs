import { useEffect, useState } from "react"
import {mega} from "../../functions/mega"
import NumeroDisplay from "../../components/NumeroDisplay";

export default function megasena() {

    const [qtde, setQtde] = useState(6)
    const [numeros, setNumeros] = useState([])

    useEffect(() => {
        setNumeros(mega())
    }, [])

    const style = {
        display: "flex", 
        flexDirection: "column",
        alignItems: "center"
    }

    function renderNumeros(){
        return numeros.map(
            numero => <NumeroDisplay key={numero} value={numero}/>
        )
    }

    return(
        <div style={style}>
            <h1>MegaSena</h1>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {renderNumeros()}
            </div>
            <div>
                <input type="number" min={6} max={10} value={qtde}
                    onChange={ev => setQtde(+ev.target.value)}/>
                <button onClick={() => setNumeros(mega(qtde))}>
                    Gerar Aposta
                </button>
            </div>
        </div>
    )
}