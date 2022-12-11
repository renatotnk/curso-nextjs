import { IconeInicio, IconeConfiguracoes, IconeSino } from "../../icons"
import MenuItem from "../MenuItem/MenuItem"

export default function MenuLateral() {
    return(
        <aside>
            <ul>
                <MenuItem url="/" texto="Inicio" icon={IconeInicio}/>
                <MenuItem url="/notificacoes" texto="Notificações" icon={IconeSino}/>
                <MenuItem url="/config" texto="Configurações" icon={IconeConfiguracoes}/>
            </ul>
        </aside>
    )
}