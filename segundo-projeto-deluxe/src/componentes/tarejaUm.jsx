
// Função criada com PROPS, ela será importada no app.jsx e definirei o props tbm nesse outro arquivo

function Titulo(props) {

    const Btn = () => {

        // método que estou usando é o get
        const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }

        // sorteando um número entre 1 e 5 (quantidade de id que tem na api)
        // para sempre o fetch buscar uma matéria diferente
        const numAleatorio = Math.floor(Math.random() * (6 - 1) + 1) // resultado aleatório (intervalo 6 a 1, onde retorna um num menor que o máx e maior ou igual o mín)
        console.log(numAleatorio) // ver qual o num sorteado

        // fetch pra puxar a informação da api fake
        fetch(`https://languageplus.onrender.com/disciplinas/${numAleatorio}`, options)

            // fetch sempre retorna uma promisse (then se for true e catch se for falso)
            .then(resp => {
                resp.json()
                    // esse then sempre retorna outra promisse - com os dados convertidos
                    .then(data =>
                        Resultado(data)
                    )
            })

            // msg de erro caso a promisse der false
            .catch(e => console.log("Deu erro: " + e))

        // function para trazer o nome da matéria na div resultado, que está vazia no html
        const Resultado = (dados) => {

            let resultado = document.querySelector('#resultado')
            resultado.innerHTML = `Você ganhou o curso de ${dados.nome}! O curso será no modo ${dados.curso}.`
        }

    }

    return (
        <fieldset>
            <h1>{props.nome}</h1>
            <small>{props.small}</small>
            <br></br>
            
            <div>
                <button id='btnTarefa' onClick={Btn}>{props.btn}</button>
            </div>
            
            <div id='resultado'>
            </div>
        </fieldset>
    )

}


// o lable quando for clicado, marca o checkbox, pq é atribuido a ele pelo "for".

export default Titulo 