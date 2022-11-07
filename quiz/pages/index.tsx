import { useEffect, useRef, useState } from 'react'
import Botao from '../components/Botao/Botao'
import Questao from '../components/Questao/Questao'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'

const questaoMock = new QuestaoModel(1, 'Melhor cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Vermelha'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Preta'),
])

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock)
  const questaoRef = useRef<QuestaoModel>()

  useEffect(() => {
    questaoRef.current = questao
  }, [questao])

  function respostaFornecida(indice: number) {
    setQuestao(questao.respondercom(indice))
  }

  function tempoEsgotado() {
    if(!questaoRef.current.respondida){
      setQuestao(questaoRef.current.respondercom(-1))
    }
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Questao valor={questao}
        tempoDeResposta = {5}
        respostaFornecida={respostaFornecida}
        tempoEsgotado={tempoEsgotado} />
      <Botao texto="Próxima Questão" href="/resultado"/>
    </div>
  )
}
