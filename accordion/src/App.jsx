import { useState } from "react";
import "./App.css";
const FaqItem=()=>{

  const[show,setShow]=useState(false)

  const handleHeaderClick=(e)=>{
    setShow(prev=>!prev)
    const element=e.target.nextElementSibling
    if(show){
      element.style.maxHeight="100%"
    }
    else{
      element.style.maxHeight="0"
    }
  }


    return(
      <div className="faq-item">
        <div className="faq-item-header" onClick={handleHeaderClick}>
          Sample ques
        </div>
        <div className="faq-item-body">
          <div className="faq-item-body-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta voluptates velit quia nam neque placeat? Modi autem excepturi debitis itaque.</div>
        </div>
      </div>
    )
}

const FaqAccordion=()=>{
 return(
  <div className="faq-accordion">
    <h2>FAQ's</h2>
    <FaqItem/>
    <FaqItem/>
    <FaqItem/>
    <FaqItem/>
  </div>
 )
}

const App = () => {
  return (
    <>
    <div className="app">
     <FaqAccordion/>
    </div>
    </>
  )
}

export default App