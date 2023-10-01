import React from 'react';
import { useState } from 'react';

function TextForm() {
    const [text, setText] = useState('Enter Text here');
    
    const handleOnchange=(e)=>{
        console.log("u typed")
        setText(e.target.value)
    }

    const handleupclick=()=>{
        console.log("U clicked")
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const handleLowclick=()=>{
        console.log("U clicked")
        let newtext=text.toLowerCase();
        setText(newtext)
    }
    const handleClearclick=()=>{
        
        let newtext=" ";
        setText(newtext)
    }
    
    const handleRemoveSpaceclick=()=>{
        
        let newtext=text.split(" ").join("")
        setText(newtext)
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

   
    return(
      <>
        <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1"  className="form-label">Enter the Text to analyze below..</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" Id="myBox" value={text} onChange={handleOnchange} rows="3"></textarea>
  <button type="button" className="btn btn-primary my-2" onClick={handleupclick}>Convert to upperCase</button>
  <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleLowclick}>Convert to LowerCase</button>
  <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleRemoveSpaceclick}>Remove Space</button>
  <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
  <button type="button" className="btn btn-dark my-2 mx-2" onClick={handleClearclick}>Clear</button>
</div>
        <div className="container my-3">
            <h3>
                Text Summary
            </h3>
            <p>
                {text.split(" ").filter((element)=>{return element.length!==0}).length} word and {text.length} letter
            </p>
            <h3>
                Preview
            </h3>
            <p>
                {text}
            </p>
        </div>
      </>
      
  );
  }
  
  export default TextForm;
  
