import Link from "next/link"

export default function rotas() {
    return(
        <div>
            <h1>Rotas Index</h1>
            <ul>
                <Link href="routes/params?id=12&nome=Ana">
                    <li>Params</li>
                </Link>
                <Link href="routes/123/buscar">
                    <li>Buscar</li>
                </Link>
                <Link href="routes/123/Daniel">
                    <li>Daniel</li>
                </Link>
            </ul>
        </div>
    )
}