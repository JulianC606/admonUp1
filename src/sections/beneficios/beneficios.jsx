import React from 'react';
import Parallax from './Parallax';

const contents = [
    "Mayor Productividad",
    "Estándares más altos de vida",
    "Mayor variedad de productos"
]

function Beneficios(){
    return(
        <div id="beneficios">
            <h1 id="taylorTitle">BENEFICIOS DE LA TECNOLOGÍA</h1>
            {contents.map((content, i) =>
                <Parallax content={content} key={i} i={i}/>
            )}
        </div>
    )
}

export default Beneficios;