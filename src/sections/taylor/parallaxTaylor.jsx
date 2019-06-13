import React from "react";
import Plx from "react-plx";
  
function ParallaxTaylor(props) {
  return (
    <div>
        <Plx
            parallaxData={parallaxData}
            style={{
            }}
        >
          <div className="taylorContainer">
            <h1 className="taylorC">{props.content}</h1>
            <h1 className="taylorI">{props.i+1}</h1>
          </div> 
        </Plx>
        <div style={{ height: "5vh" }} />
    </div>
  );
}

const parallaxData = [
  {
    start: "self",
    startOffset: "10vh",
    end: "self",
    endOffset: "40vh",
    easing: "easeInSine",
    properties: [
        {
            startValue: 45,
            endValue: 0,
            property: "rotate",
            unit: "deg"
          },{
            startValue: 0,
            endValue: 1,
            property: "scale",
            unit: ""
          },{
            startValue: 5,
            endValue: 0,
            property: "blur",
            unit: ""
          }
      ]
  },
  {
    start: "self",
    startOffset: "80vh",
    end: "self",
    endOffset: "120vh",
    easing: "easeInSine",
    properties: [
        {
            startValue: 0,
            endValue: 45,
            property: "rotate",
            unit: "deg"
          },{
            startValue: 1,
            endValue: 0,
            property: "scale",
            unit: ""
          },{
            startValue: 0,
            endValue: 5,
            property: "blur",
            unit: ""
          }
    ]
  }
];

export default ParallaxTaylor;