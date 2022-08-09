function acao1(){
    console.log("acao 1")
}

export default function botao() {
    function acao2(){
        console.log("acao 2")
    }

    return(
        <div>
            <button onClick={acao1}>Click #01</button>
            <button onClick={acao2}>Click #02</button>
        </div>
    )
}