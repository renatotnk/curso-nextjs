import { useRouter } from "next/router"
import Link from "next/link"

export default function buscar() {
    const router = useRouter()
    const codigo = router.query.id
    return(
        <div>
            <h1>Rotas / {codigo} / Buscar</h1>
            <Link href="/routes">
                <button>Voltar</button>
            </Link>
        </div>
    )
}