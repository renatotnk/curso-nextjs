import QuestaoModel from "../../model/questao"
import Enunciado from "../Enunciado/Enunciado"
import styles from "./Questao.module.css"

interface QuestaoProps {
    valor: QuestaoModel
}

export default function Questao(props: QuestaoProps) {
    const questao = props.valor

    return(
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado}/>
        </div>
    )
}