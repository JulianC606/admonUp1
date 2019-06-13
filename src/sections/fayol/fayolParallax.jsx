import React from "react";
import Plx from "react-plx";

function Fayol(props) {
  return (
    <div>
      <div style={{ height: "10vh" }} />

      <Plx
        parallaxData={parallaxData}
        style={{
          height: "auto",
          width: "40vw",
          margin: "auto"
        }}
      >
        {
            <div className="fayolPrinciple">
                <h1 className="i">{props.i+1}</h1>
                <h1>{props.title}</h1>
                <p>{props.principle}</p>
            </div>
            
        }
      </Plx>

      <div style={{ height: "20vh" }} />
    </div>
  );
}

const parallaxData = [
  {
    start: "self",
    startOffset: "0",
    end: "self",
    endOffset: "50vh",
    easing: "easeInSine",
    properties: [
        {
            startValue: -50,
            endValue: 0,
            property: "translateX",
            unit: "vw"
          },{
            startValue: 0,
            endValue: 1,
            property: "scale",
            unit: ""
          }
      ]
  },
  {
    start: "self",
    startOffset: "60vh",
    end: "self",
    endOffset: "100vh",
    easing: "easeInSine",
    properties: [
        {
            startValue: 0,
            endValue: -50,
            property: "translateX",
            unit: "vw"
          },{
            startValue: 1,
            endValue: 0,
            property: "scale",
            unit: ""
          }
    ]
  }
];

export default Fayol;