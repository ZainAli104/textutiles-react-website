import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
      // console.log("Click on upper case" + text);
      let newText= text.toUpperCase();
      setText(newText)
      props.showAlert('Converted to UpperCase', 'success')
    }

    const handleLoClick = ()=>{
      let newText= text.toLowerCase();
      setText(newText)
      props.showAlert('Converted to LowerCase', 'success')
    }

    const handleClClick = ()=>{
      let newText= "";
      setText(newText)
      props.showAlert('Clear Text', 'success')
    }

    const handleCopy = ()=>{
      var text = document.getElementById("mytext");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert('Copied to clipboard', 'success')
    }

    const handleExtra = ()=> {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert('You removed extra Spaces', 'success')
    }

    const hanldeOnChange = (event)=>{
      // console.log("Handle On Change");
      setText(event.target.value)
    }
   
    const [text, setText]= useState ("");
  return (
    <>
    <div style={{color: props.mode ==='dark'?'white':'#002142'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={hanldeOnChange}  style={{backgroundColor: props.mode ==='dark'?'#00162c':'#fcfcfc', color: props.mode ==='dark'?'white':'#002142'}} id="mytext" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-1" onClick={handleExtra}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleClClick}>Clear</button>
    </div>
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#002142'}}>
      <h3>Your text summary</h3>
      <p>{text.length=== 0?text.split(" ").length-1:text.split(" ").length} and  {text.length} character</p>
      <p>{0.08 * text.split(" ").length} minutes for read this</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:'Enter some text above to show Preview'}</p>
    </div>
    </>
  )
}
