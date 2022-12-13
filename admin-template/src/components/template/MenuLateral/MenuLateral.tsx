import { IconeInicio, IconeConfiguracoes, IconeSino, IconeSair } from "../../icons"
import MenuItem from "../MenuItem/MenuItem"
import Logo from "../Logo/Logo"

export default function MenuLateral() {
    return(
        <aside className={`
            flex flex-col
            bg-gray-200 text-gray-700
            dark:bg-gray-900 
        `}>
            <Logo url="/"/>            
            <ul className={`flex flex-col flex-grow`}>
                <MenuItem url="/notificacoes" texto="Notificações" icon={IconeSino}/>
                <MenuItem url="/config" texto="Configurações" icon={IconeConfiguracoes}/>
            </ul>
            <ul>
                <MenuItem 
                    url=""
                    texto="Sair" 
                    icon={IconeSair} 
                    onClick={() => {console.log("Logout")}}
                    className={`
                        text-red-600 dark:text-red-300
                        hover:bg-red-400 hover:text-white
                        dark:hover:text-white
                    `}
                    />
            </ul>
        </aside>
    )
}