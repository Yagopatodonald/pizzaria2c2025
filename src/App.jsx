import { useState } from "react"

function App(){
  
  const [nome, setNome] = useState('Ronaldo')

  const Formulario = (props) => {
    return (
      <div>
        
      <input placeholder={props.sombra} className="Nome" type="text" name="nome" onChange={(e)=>{setNome(e.target.value)}}/>

      <button onClick={()=>{(props.mensagem != null) ? alert(props.mensagem): alert("Texto padrão")}} className="Botao">
      {(props.textoBotao != null) ?   props.textoBotao : "Clique aqui"}
      </button>
      </div>
    );

  };


  return (
    <div>
      <h3>Pizzaria 2C</h3>
      <Formulario sombra ="Digite seu nome..." textoBotao="Enviar nome" />
      <Formulario sombra="Digite seu email..." textoBotao="Enviar email"/>
      <Formulario sombra="(11) 90000-0000" textoBotao="Celular"/>
      <Formulario mensagem = "Mensagem enviada pelo app"/>
    </div>
  )
}
export default App
