const Produtos = () => {

    const pizzas = [
        'pizza 1',
        'pizza 2',
        'pizza 3'
    ]

    const listaPizzas = pizzas.map(pizza=><li>{pizza}</li>)


    return (
        <div>
            <h3>Listagem de Produtos</h3>
            <ul>
                {listaPizzas}
            </ul>
        </div>
    )
}

export default Produtos
