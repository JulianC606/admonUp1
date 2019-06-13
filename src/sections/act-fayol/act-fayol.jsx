import React from 'react';
import Parallax from './a-f-parallax';

const contents = [
    {
        title: "Técnica",
        content: "Producción"
    },
    {
        title: "Comercial",
        content: "Compra, Venta e Intercambio"
    },
    {
        title: "Financiera",
        content: "La búsqueda de uso óptimo de capital"
    },
    {
        title: "De Seguridad",
        content: "Seguridad para los colaboradores y para la empresa"
    },
    {
        title: "Administrativa",
        content: "Planeación, Organización, Dirección, Control e Integración del Personal"
    },
    {
        title: "Contables",
        content: "Manejo de los Registros Contables y Estadísticas"
    },
]

function AFayol(){
    return(
        <div id="Afayol">
            <h1>ACTIVIDADES DE FAYOL EN LA EMPRESA INDUSTRIAL</h1>
            <br/>
            {contents.map((content, i) => 
                <Parallax title={content.title} principle={content.content} i={i} key={i}/>
            )}
        </div>
    )
}

export default AFayol;