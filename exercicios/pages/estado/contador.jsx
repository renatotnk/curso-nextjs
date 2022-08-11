import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay";

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
            <NumeroDisplay value={value}/>
            <div>
                <button onClick={decrementar}>-</button>
                <button onClick={incrementar}>+</button>
            </div>
        </div>
    )
}