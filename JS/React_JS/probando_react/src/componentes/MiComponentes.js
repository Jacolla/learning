import React,{Component} from 'react';

class MiComponentes extends Component{

    render(){
        let receta= {
            nombre: "Bocata clasico",
            ingredientes: ["pan","jamon","quesito","pan"],
            calorias: "382"

        }

        return(
            <div className="mi_componente">   {/* Para poder sacar mas de 1 etiqueta, hay que meterlas en algun grupo 'div' o 'React.fragment' */}
                <h1>{"Nombre del alimento: " + receta.nombre}</h1>
                <ol>
                    {
                        receta.ingredientes.map((ingredientes,i) =>{
                            console.log(ingredientes);
                            return(
                                <li key={i}>
                                    {ingredientes}
                                </li>
                            )
                        })
                    }
                </ol>
                <h2>{"Calorias: " + receta.calorias}</h2>

            </div>
        )
    }
}

export default MiComponentes;