import React from 'react';
import Parallax from './fayolParallax';

const contents = 
[
    {
        title: "División de Trabajo",
        principle: "Es la especialización que los economistas consideran necesaria para lograr la eficiencia del uso de la mano de obra."
    },
    {
        title: "Autoridad y Responsabilidad",
        principle: "En este caso Fayol determina que la autoridad y la responsabilidad se relacionan entre sí y que la segunda es consecuencia de la primera.",
    },
    {
        title: "Disciplina",
        principle: "Al considerarla con el respeto por acuerdos que se dirigen a obtener obediencia.",
    },
    {
        title: "Unidad de Mando",
        principle: "Esto significa que los colaboradores deben recibir ordenes solo de un superior.",
    },
    {
        title: "Unidad de Dirección",
        principle: "Según este principio, cada grupo de actividades con el mismo objetivo deben tener un jefe y un plan.",
    },
    {
        title: "Subordinación del Interés individual al general",
        principle: "Esto se explica por si mismo, cuando hay diferencias entre ambos, la administración debe conciliarlo.",
    },
    {
        title: "Remuneración",
        principle: "La remuneración y los métodos de pagos deben ser justos y permitir la satisfacción máxima posible para los colaboradores y el patrón.",
    },
    {
        title: "Centralización",
        principle: "Se refiere al grado en el que la autoridad está concentrada o dispersa.",
    },
    {
        title: "Cadena Escalar",
        principle: "Fayol concibe esto cómo la cadena de superiores, desde los rangos más altos a los rangos más bajos.",
    },
    {
        title: "Orden",
        principle: "Fayol divide el orden en Material y social y sigue su sencillo adagio que dice: 'Un lugar para cada cosa y cada cosa en su lugar'.",
    },
    {
        title: "Equidad",
        principle: "Se debe tener lealtad y devoción del personal mediante la combinación de amabilidad y justicia por parte de los gerentes, cuando traten con los subordinados.",
    },
    {
        title: "Estabilidad en el Puesto",
        principle: "Al encontrar que la rotación innecesaria es, al mismo tiempo, la causa y el efecto de la mala administración. Fayol señala los peligros y costos.",
    },
    {
        title: "Iniciativa",
        principle: "Se concibe como la elaboración y ejecución de un plan.",
    },
    {
        title: "Espíritu de Equipo",
        principle: "Este es el principio que la unión hace la fuerza.",
    }
]

function Fayol(){
    return(
        <div id="fayol">
            <h1>PRINCIPIOS DE FAYOL</h1>
            <br/>
            {contents.map((content, i) => 
                <Parallax title={content.title} principle={content.principle} i={i} key={i}/>
            )}
        </div>
    )
}

export default Fayol;