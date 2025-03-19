import { useState } from "react"
function App(){
  const [nome, setNome] = useState('Ronaldo')
  return (
    <div>
      <h3>Pizzaria 2C</h3>

      <input className="Nome" type="text" name="nome" onChange={(e)=>{setNome(e.target.value)}}/>

      <button onClick={()=>{alert(nome)}} className="Botao">
        Clique aqui
      </button>

    </div>
  )
}
export default App
