import Produtos from './Produtos'

function ListaProdutos(props) {

    function exibirLista () {
        return Produtos.map (p => {
            return (
                <li key = {p.id}>
                    <div>{p.id}</div>
                    <h3>{p.nome}</h3>
                    <h3>R$ {p.preco}</h3>
                </li>
            )
        })
    }

return (
    <>
        <h2>Lista de Produtos</h2>

        <ul>{exibirLista()}</ul>
    </>
    )


//     function exibirLista () {
//         return Produtos.map (p => {
//             return (
//                 <h3>
//                     {p.id} {p.nome} tem preço.: R$ {p.preco}
//                 </h3>
//             )
//         })
//     }

// return (
//     <>
//         <h2>Lista de Produtos</h2>
//         {exibirLista()}
//     </>
//     )
}

export default ListaProdutos