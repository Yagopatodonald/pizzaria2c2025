import {useState, useEffect} from 'react'
import axios from 'axios'

const Produtos = () => {
    const [pizzas, setPizzas] = useState ([])
    axios.get("http://viacep.com.br/ws/01010000/json")
    .then (response=>{
        console.log(response.data)
    })
    .catch(error=>{console.log(error)})
    

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
