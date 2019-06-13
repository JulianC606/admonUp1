import React from "react";
import Plx from "react-plx";
  
function ParallaxTaylor(props) {
  return (
    <div>
        <Plx
            parallaxData={parallaxData}
            style={{
            height: "40vw",
            width: "50vw",
            margin: "auto",
            }}
        >
            <h1>{props.content}</h1>
        </Plx>
        <div style={{ height: "5vh" }} />
    </div>
  );
}

const parallaxData = [
  {
    start: "self",
    startOffset: "10vw",
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
    startOffset: "60vh",
    end: "self",
    endOffset: "100vh",
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