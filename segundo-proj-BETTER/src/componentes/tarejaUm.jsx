
// Função criada com PROPS, ela será importada no app.jsx e definirei o props tbm nesse outro arquivo

function Titulo(props) {
    return (
        <fieldset>
            <h1>{props.nome}</h1>
            <div>
                <input type="checkbox" id="titulo" name="titulo"/>
                <label for="titulo">check-box</label> 
            </div>
        </fieldset> 
    )
}

// o lable quando for clicado, marca o checkbox, pq é atribuido a ele pelo "for".

export default Titulo