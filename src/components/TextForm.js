import React , {useState} from 'react'

export default function TextForm(props) {
  const handleUpclick = ()=> {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Text is coverted into Upper Case","success");
  }
  const handleloclick = ()=> {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Text is coverted into Lower Case","success");
  }
  const handleClearclick = ()=> {
    let newText = (" ");
    setText(newText)
    props.showAlert("The text is cleared","success");
  }
  const handleExtraSpaces = ()=> {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed extra spaces","success");
  }
  const handleCopy = ()=>{
    var text= document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied","success");
  }
  const onchange =(event)=>{
    setText(event.target.value)
  }
  
  const [text, setText] = useState("");
    
  return (
    <>

 <div className="container" >
             <h1>{props.heading}</h1> 
       
             <div className="mb-3">

               <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white',colorAdjust:props.mode==='light'?'dark':'light'}}  onChange={onchange} value={text} id="myBox" rows= "8"></textarea>
             </div>
   <button className= "btn btn-primary mx-2" style={{backgroundColor: props.mode==='dark'?'#1f004d':'#8533ff'}} onClick={handleUpclick}>Covert into UpperCase</button>
   <button className= "btn btn-primary mx-2" style={{backgroundColor: props.mode==='dark'?'#1f004d':'#8533ff'}} onClick={handleloclick}>Covert into LowerCase</button>
   <button className= "btn btn-primary mx-2" style={{backgroundColor: props.mode==='dark'?'#1f004d':'#8533ff'}} onClick={handleClearclick}>Clear text</button>
   <button className= "btn btn-primary mx-2" style={{backgroundColor: props.mode==='dark'?'#1f004d':'#8533ff'}} onClick={handleCopy}>Copy text</button>
   <button className= "btn btn-primary mx-2" style={{backgroundColor: props.mode==='dark'?'#1f004d':'#8533ff'}} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
</div>
<div className={`"container" text-${props.mode==='light'?'dark':'light'}`}>
   <h2>
    Your Text Summary
   </h2>
  <p>
    you enter <b>{text.split(" ").length} </b>words and <b>{text.length}</b> characters
    
  </p>
<p>
  {.008 * text.split(" ").length} in minutes you can read
</p>

<h2>Preview</h2>
<p>{text.length>0?text:"Enter something on above textarea for preview"}</p>

  </div>

</>


  )
}
