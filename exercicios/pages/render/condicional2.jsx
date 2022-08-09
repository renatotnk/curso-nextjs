import IfComponent from "../../components/If";

export default function condicional2() {
    const numero = 45;
    return(
        <div>
            <IfComponent teste={numero % 2 === 0}>
                <h1>O número é par</h1>
            </IfComponent>
            <IfComponent teste={numero % 2 === 1}>
                <h1>O número é impar</h1>
            </IfComponent>
        </div>
    )
}