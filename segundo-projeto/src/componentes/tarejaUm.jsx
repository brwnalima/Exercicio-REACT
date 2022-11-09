
// Função criada com PROPS, ela será importada no app.jsx e definirei o props tbm nesse outro arquivo

function Titulo(props) {
    return (
        <fieldset>
            <legend>{props.titulo}</legend>
            <div>
                <input type="checkbox" id="titulo" name="titulo"/>
                <label for="titulo">check-box</label> 
            </div>
        </fieldset> 
    )
}

// o lable quando for clicado, marca o checkbox, pq é atribuido a ele pelo "for".

export default Titulo