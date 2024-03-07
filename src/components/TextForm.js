 
import React,{useState} from 'react';

function TextForm(props) {
    const [text, settext] = useState("")

    const onchangehandle = (event)=>{
        settext(event.target.value);
    }
    const handleupcase = ()=>{
        let nextText = text.toUpperCase();
        settext(nextText);
        
    }
    const handlelocase = ()=>{
        let nextText = text.toLocaleLowerCase();
        settext(nextText);
        
    }
    const handleclear = ()=>{
        let nextText = "";
        settext(nextText);
        
    }
    
    return (
    <div className='container '>
        <h1 style={{color: props.mode === "light"?"black":"white"}}>{props.tittle1}</h1>
    
        <div className="container mb-3">
        <textarea className='form-control' value={text} onChange={onchangehandle} style={{backgroundColor: props.mode === "dark"?"#283141":"#F2F3F9",color:props.mode==="dark"?"white":"black"}} id="myBox" rows="8" > </textarea>
        </div>
        <button className='btn btn-primary mx-2,my-2' onClick={handleupcase}>convert to upper case</button>
        <button className='btn btn-primary mx-2,my-2' onClick={handlelocase}>convert to lower case</button>
        <button className='btn btn-primary mx-2,my-2' onClick={handleclear}>clear it</button>
    
         
        <div className="container my-3" style={{color: props.mode === "light"?"black":"white"}}>
       <h2> your text summmery</h2>
       <p>{text.split(" ").length} words {text.length} characters</p>
       
     <p>{0.008 * text.split(" ").length} minutes to read</p>
      
     
       <h3>preview</h3>
       <p>{text.length === 0 ? "enter some text to show here" : text}</p>
       
        </div>
      
    </div>
    );
}

export default TextForm
