import { embaralhar } from "../../../functions/arrays"
import questoes from "../bancodeQuestoes"

export default function handler(req, res) {
    const ids = questoes.map(questao => questao.id)
    res.status(200).json(embaralhar(ids))
}
