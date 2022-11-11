import QuestaoModel from "../../model/questao"
import Botao from "../Botao/Botao"
import Questao from "../Questao/Questao"
import styles from "./Questionario.module.css"

interface QuestionarioProps{
    questao: QuestaoModel
    ultima: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    goToNextStep: () => void
}

export default function Questionario(props: QuestionarioProps) {

    function respostaFornecida(indice : number){
            if(!props.questao.respondida){
                props.questaoRespondida(props.questao.responderCom(indice))
            }
    }

    return(
        <div className={styles.questionario}>
            { props.questao ? 
                <Questao
                    valor={props.questao}
                    tempoDeResposta={6}
                    respostaFornecida={respostaFornecida}
                    tempoEsgotado={props.goToNextStep}
                /> : false
            }
            <Botao 
                onClick={props.goToNextStep}
                texto={props.ultima ? 'Finalizar' : 'Proxima'}
            />
        </div>
    )

}