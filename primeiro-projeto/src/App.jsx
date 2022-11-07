import { useState } from 'react' // useState é uma ferramenta do react, sempre tem que importar
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  // variáveis sempre declaradas em vetores.
  const [nome] = useState('André')
  const [numero, setNumero] = useState(0) //o set é o método que altera a variável, independente do nome
  // caso a variável fosse nome, seria setNome (em cammelCase).




  // Criando uma função que faz o setNumero adiconar mais um toda vez que o btn for clicado.
  const trocaCor = () => {

    let btn = document.getElementById("btnLike")
    let seletor = document.getElementById("seletor")

    switch (seletor.value) {
      case "amarelo":
        btn.style.backgroundColor = 'yellow'
        btn.style.color = 'black'
        break;
      case "vermelho":
        btn.style.backgroundColor = 'red'
        break;
      case "verde":
        btn.style.backgroundColor = 'green'
        btn.style.color = 'white'
        break;
      case "branco":
        btn.style.backgroundColor = 'white'
        btn.style.color = 'black'
        break;
      case "preto":
        btn.style.backgroundColor = 'Black'
        btn.style.color = 'white'
        break;
      default:
        break;
    }


    // if (seletor.value == "amarelo") {
    //   btn.style.backgroundColor = 'yellow'
    //   btn.style.color = 'black'

    // } else if (seletor.value == "vermelho") {
    //   btn.style.backgroundColor = 'red'

    // } else if (seletor.value == "verde") {
    //   btn.style.backgroundColor = 'green'

    // } else if (seletor.value == "branco") {
    //   btn.style.backgroundColor = 'white'
    //   btn.style.color = 'black'

    // } else if (seletor.value.value == "preto") {
    //   btn.style.backgroundColor = 'red'
    //   btn.style.color = 'white'
    // }


  }

  // Criei um seletor pra já saber quais as cores que tem, já que o usuário poderia colocar qualquer uma
  // Variáveis recebendo as tags do seletor e do botão
  // Condicional pra saber qual o VALUE do seletor e, a partir disso, fazer algo

  // FAIL, não consegui fazer com switch de primeira >> CONSEGUI


  return (
    <div className="App">
      <h1>Olá! Qual sua cor favorita?</h1>
      <select id='seletor'>
        <option disabled value="disabled">Selecione</option>
        <option value="amarelo">Amarelo</option>
        <option value="vermelho">Vermelho</option>
        <option value="verde">Verde</option>
        <option value="branco">Branco</option>
        <option value="preto">Preto</option>
      </select>

      <div>
        <h2>Aperte o botão e veja a mágica acontecer:</h2>
        <div>
          <button id='btnLike' onClick={trocaCor}>TCHARAM</button>
        </div>
      </div>

    </div>
  )
}

export default App


