import React, { useState } from 'react'

function TextForm(props) {   
  const [text , setText] = useState('Enter the text here');

  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const upperCase =()=>{
    setText(text.toUpperCase());
    props.showAlert('converted to upper case','primary');
  }
  const lowerCase =()=>{
    setText(text.toLowerCase());
    props.showAlert('converted to Lower case','primary');
  }
  const copyText =()=>{
    navigator.clipboard.writeText(text);
    props.showAlert('Text copied','primary');

  }
  const removeExtraSpaces =()=>{
      let newText=   text.replace(/\s+/g, ' ').trim();
      setText(newText);
      props.showAlert('Extra spaces removed','danger')
  }
  const clearText =()=>{
    setText('');
    props.showAlert('The text has been cleared','primary');

  }
  return (
    <>  
    <div className={`form-group my-3} `} >
                 <h1 className= {`text-${props.mode === 'dark' ?'success':'dark'}`}>Text Box</h1>
                <textarea className={`bg-${props.mode } textHeight form-control   text-${props.mode === 'dark' ? 'white':'black'} `} id="myBox" value={text} onChange={handleOnChange} rows="3"></textarea> 
    </div>
    <div>
        <button className='btn mx-2 mt-3 bg-primary' onClick={upperCase} >Upper Case</button>
        <button className='btn mx-2 mt-3 bg-primary' onClick={lowerCase} >Lower Case</button>
        <button className='btn mx-2 mt-3 bg-primary' onClick={copyText} >Copy Text</button>
        <button className='btn mx-2 mt-3 bg-primary' onClick={removeExtraSpaces} >Remove Extra spaces </button>
        <button className='btn mx-2 mt-3 bg-primary' onClick={clearText} >Clear Text</button>
    </div>
    <div className='mt-3'>
        <h1>Your Text summary</h1>
        <p>{text.split(/\s+/).filter((element)=> element.length!==0).length} word
         and {text.length} Characters
         </p>
         <p>Need {text.split(" ").filter((element)=> element.length!==0).length*0.08} Minutes to Read </p>
         <h3>Preview of text</h3>
         <p>{text}</p>
    </div>
    
    </>
  )
}

export default TextForm