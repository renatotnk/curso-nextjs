import MenuLateral from "../MenuLateral/MenuLateral"
import Cabecalho from "../Cabecalho/Cabecalho"
import Conteudo from "../Conteudo/Conteudo"

interface LayoutProps{
    titulo: string
    subtitulo: string
    children?: any
}

const Layout = (props: LayoutProps) => {
    return(
        <div className={`flex h-screen w-screen`}>
            <MenuLateral/>
            <div className={`
                flex flex-col w-full p-7 
                bg-gray-300
            `}>
                <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
                <Conteudo>
                    {props.children}
                </Conteudo>
            </div>
        </div>
    )
}

export default Layout