import { IconeInicio, IconeConfiguracoes, IconeSino } from "../../icons"
import MenuItem from "../MenuItem/MenuItem"
import Logo from "../Logo/Logo"

export default function MenuLateral() {
    return(
        <aside>
            <Logo url="/"/>            
            <ul>
                <MenuItem url="/notificacoes" texto="Notificações" icon={IconeSino}/>
                <MenuItem url="/config" texto="Configurações" icon={IconeConfiguracoes}/>
            </ul>
        </aside>
    )
}