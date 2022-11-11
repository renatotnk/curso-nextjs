import { useEffect, useRef, useState } from 'react'
import Questionario from '../components/Questionario/Questionario'
import QuestaoModel from '../model/questao'
import { useRouter } from 'next/router'
import { isDataView } from 'util/types'

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const router = useRouter()

  const [questionaryIds, setQuestionIds] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>()
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

  function idProximaPergunta(){
    const proximoIndice = questionaryIds.indexOf(questao.id) + 1
    return questionaryIds[proximoIndice]
  }

  function goToNextStep(){
    const proximoId = idProximaPergunta()
    proximoId ? goToNextQuestion(proximoId) : endQuiz()
  } 

  function goToNextQuestion(proximoId : number){
    loadQuestion(proximoId)
  }

  function endQuiz(){
    router.push({
      pathname: "/resultado",
      query:{
        total: questionaryIds.length,
        certas: respostasCertas
      }
    })
  }

  return questao ? (
    <Questionario
      questao={questao}
      ultima={idProximaPergunta() === undefined}
      questaoRespondida={questaoRespondida}
      goToNextStep={goToNextStep}
    />
  ) : false
}
