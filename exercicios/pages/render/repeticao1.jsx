export default function repeticao1() {
    const listaAprovados = [
        'João',
        'Maria',
        'Bia',
        'Carlos',
        'Ana',
        'Daniel',
        'Laura',
    ]

    function rendenizarLista(){
        /* const itens = []
        for(let i = 0; i < listaAprovados.length; i++){
            itens.push(<li key={i}>{listaAprovados[i]}</li>)

        } 

        return itens;
        */

        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>);
    }

    return (
        <ul>
            {rendenizarLista()}
        </ul>
    )
}