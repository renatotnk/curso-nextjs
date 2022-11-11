import { useEffect, useRef, useState } from 'react'
import Questionario from '../components/Questionario/Questionario'
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

  function questaoRespondida(questao: QuestaoModel){

  }

  function goToNextStep(){}

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Questionario
        questao={questao}
        ultima={true}
        questaoRespondida={questaoRespondida}
        goToNextStep={goToNextStep }
      />
    </div>
  )
}
