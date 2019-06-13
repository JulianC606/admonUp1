import React from 'react';
import Item from './parallaxTaylor';

const contents = [
    'Sustituir las reglas prácticas por la ciencia del "Conocimiento Organizado".'
    ,
    'Obtener Armonía en lugar de discordia en la acción de grupo.'
    ,
    'Lograr la colaboración entre los seres humanos en lugar del individualismo caótico.'
    ,
    'Trabajar en busca de una producción máxima en lugar de una producción restringida.'
    ,
    'Desarrollar a cada uno de los colaboradores hasta el grado más alto posible para su beneficio y la mayor prosperidad de la empresa.'
]

function Taylor(){
    return(
        <div id="taylor">
            <h1 id="taylorTitle">PRINCIPIOS DE TAYLOR</h1>
            {contents.map((content, i) =>
                <Item content={content} key={i}/>
            )}
        </div>
        
    )
}

export default Taylor;