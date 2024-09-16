import React, { useEffect, useRef } from "react";
import "./CustomButtonWC";
import './FormComponentWC'
function App() {
  // useEffect(() => {
  //   const customButton = document.querySelector("custom-button");
  //   customButton?.addEventListener("click", () => {
  //     alert("Web Component Button Clicked!");
  //   });
  // }, []);

  const formComponentRef = useRef(null);

  useEffect(()=>{
    const formComponent = formComponentRef.current

    const handleFormSubmit = (event)=>{
      console.log("Form is Submitted with data : "+event.detail)
    }

    if(formComponent){
      formComponent.addEventListener("onFormSubmit",handleFormSubmit)
    }

    return ()=>{
      if(formComponent){
        formComponent.removeEventListener("onFormSubmit",handleFormSubmit)
      }
    }
  },[])

 

  return (
    <div>
      <h1>Testing the Form Web Component</h1>
      {/* <custom-button label="Hi there "></custom-button> */}
      <form-component ref={formComponentRef}></form-component>
    </div>
  );
}

export default App;
