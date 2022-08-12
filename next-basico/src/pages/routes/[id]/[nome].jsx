import { useRouter } from "next/router"
import Link from "next/link"

export default function IdNome() {
    const router = useRouter()
    const codigo = router.query.id
    const nome = router.query.nome
    return(
        <div>
            <h1>Rotas / {codigo} / {nome}</h1>
            <Link href="/routes" passHref>
                <button>Voltar</button>
            </Link>
        </div>
    )
}