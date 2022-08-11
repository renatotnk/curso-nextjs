import Link from "next/link"
import router from "next/router"

export default function rotas() {

    function navegacaoSimples(url){
        router.push(url)
    }

    function navegacaoComParams(){
        router.push({
            pathname: "routes/params",
            query:{
                id: 123,
                nome: 'Ana'
            }
        })
    }

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
            <div style={{display: "flex", flexDirection: "column", alignItems:"flex-start"}}>
                <button onClick={navegacaoComParams}>Params</button>
                <button onClick={() => router.push("routes/123/buscar")}>Buscar</button>
                <button onClick={() => navegacaoSimples("routes/123/Daniel")}>Daniel</button>
            </div>
        </div>
    )
}