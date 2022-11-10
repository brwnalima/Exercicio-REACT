
// Função criada com PROPS, ela será importada no app.jsx e definirei o props tbm nesse outro arquivo

function Titulo(props) {

    const Btn = () => {

        const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }

        fetch(`https://example-deploy-a-json-server.onrender.com/notas`, options)
            
            .then(resp => {
                resp.json()
                .then(data => console.log(data))
            })

            .catch(e => console.log("Deu erro: " + e,message))

    }

    return (
        <fieldset>
            <h1>{props.nome}</h1>
            <div>
                <button id='btnTarefa' onClick={Btn}>{props.btn}</button>
            </div>
        </fieldset>
    )

}






// o lable quando for clicado, marca o checkbox, pq é atribuido a ele pelo "for".

export default Titulo 