import React from 'react';
import ReactDom from 'react-dom' ;
import Covid19Tracking  from './Covid19Tracking';

 describe("Covid19 Tracking", () =>{
   it("Renders without crashing", () =>{
     const div = document.createElement("div");
     ReactDom.render(<Covid19Tracking/>, div);
   });
  });

  