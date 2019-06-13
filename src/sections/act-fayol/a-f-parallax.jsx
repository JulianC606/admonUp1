import React from 'react';
import Plx from 'react-plx';


function AFParallax(props) {
    return (
      <div>
        <div style={{ height: "10vh" }} />
  
        <Plx
          parallaxData={parallaxData}
          style={{
          }}
        >
          <div className="fayolPrinciple">
                <h1 className="i">{props.i+1}</h1>
                <h1>{props.title}</h1>
                <p>{props.principle}</p>
            </div>
        </Plx>
  
        <div style={{ height: "20vh" }} />
      </div>
    );
  }
  
  const parallaxData = [
    {
      start: "self",
      startOffset: "10vw",
      end: "self",
      endOffset: "50vh",
      easing: "easeInSine",
      properties: [
          {
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
              startValue: 1,
              endValue: 0,
              property: "scale",
              unit: ""
            }
      ]
    }
  ];

export default AFParallax;