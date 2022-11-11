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

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const [questionaryIds, setQuestionIds] = useState<number[]>([])
  const [questao, setQuestao] = useState(questaoMock)
  const [respostasCertas, setRespostasCertas] = useState<number>(0)

  async function loadQuestionIds(){
    const resp = await fetch(`${BASE_URL}/questionario`)
    const questionaryIds = await resp.json()
    setQuestionIds(questionaryIds)
  }

  async function loadQuestion(questionId: number){
    const resp = await fetch(`${BASE_URL}/questoes/${questionId}`)
    const json = await resp.json()
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json)
    setQuestao(novaQuestao)
  }
  
  useEffect(() => {
    loadQuestionIds()
  }, [])

  useEffect(() => {
    questionaryIds.length > 0 && loadQuestion(questionaryIds[0])
  }, [questionaryIds])

  function questaoRespondida(questao: QuestaoModel){
    setQuestao(questao)
    const acertou = questao.acertou
    setRespostasCertas(respostasCertas + (acertou? 1 : 0))
  }

  function goToNextStep(){} 

  return (
    <Questionario
      questao={questao}
      ultima={true}
      questaoRespondida={questaoRespondida}
      goToNextStep={goToNextStep }
    />
  )
}
