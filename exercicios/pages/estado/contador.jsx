import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay";

export default function contador() {
    const [value = 0, setValue] = useState(0);
    
    const decrementar = () => setValue(value - 1)
    const incrementar = () => setValue(value + 1)

    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <h1>Contador</h1>
            <ContadorDisplay value={value}/>
            <div>
                <button onClick={decrementar}>-</button>
                <button onClick={incrementar}>+</button>
            </div>
        </div>
    )
}