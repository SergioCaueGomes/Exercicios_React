import '../Estilos.css'

export default props => {
    return (
        <div>
            <h2 className='titulo'>{props.principal}</h2>
            <h2>{props.secundario}</h2>
        </div>
    )
}