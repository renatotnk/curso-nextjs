import styles from "../styles/Jogo.module.css"
import { useState } from "react";
import Porta from "../components/Porta/Porta";
import { atualizarPortas, criarPortas } from "../functions/portas";
import PortaModel from "../model/Porta";
import Link from "next/link";

export default function Jogo() {
    const [p1, setP1] = useState(new PortaModel(1))

    const [portas, setPortas] = useState(criarPortas(3,2))

    function renderizarPortas(){
        return portas.map(porta => {
            return <Porta key={porta.numero} value={porta} 
            onChange={novaPorta => {
                setPortas(atualizarPortas(portas, novaPorta))
            }
            }/>
        })
    }

    return(
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {renderizarPortas()}
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar jogo</button>
                </Link>
            </div>
        </div>
    )
}