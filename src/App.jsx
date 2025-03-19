import { useState } from "react"
function App(){
  const [nome, setNome] = useState('Ronaldo')

  const Formulario = () => {
    return (
      <div>
        
      <input className="Nome" type="text" name="nome" onChange={(e)=>{setNome(e.target.value)}}/>

      <button onClick={()=>{alert(nome)}} className="Botao">
      Clique aqui
      </button>
      </div>
    );

  };


  return (
    <div>
      <h3>Pizzaria 2C</h3>
      <Formulario />
      <Formulario />
      <Formulario />

    </div>
  )
}
export default App
