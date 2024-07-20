import React, {useState} from 'react'

export default function TextForm(props) {
    //Convert To UpperCase
    const uClick = ()=> {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to UpperCase ","Task Completed ")
    }
    //Convert To LowerCase
    const lClick = ()=> {
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to LowerCase ","Task Completed ")

    }
    //For Typing
    const handleOnCHange = (event)=> {
        // console.log("Handle on Change");
        setText(event.target.value);
    }
    //To Clear Text
    const dClick =()=>{
        let newText ='';
        setText(newText);
        props.showAlert(" Text Area Cleard ","Task Completed ")

    }
    //To CopyText
    const cClick = (event)=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert(" Text Copied ","Task Completed ")

    }
    //Remove Extra Spaces
    const esClick = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert(" Removed Extra Spaces ","Task Completed ")
    }

    const [text, setText] = useState('Enter Text Here');

  return (
    <>
    <div style={{backgroundColor: props.mode==='light'?'white':'black' ,color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label for="myBox" className="form-label">
                Text Area Below
            </label>
            <textarea className="form-control" value={text} onChange={handleOnCHange} 
            style={{backgroundColor: props.mode==='light'?'white':'black' , color:props.mode==='light'?'black':'white'}}
             id="myBox" rows="8"></textarea>
            <button className='btn-primary my-3' onClick={uClick} >
                Convert to UPPERCASE
            </button>
            <button className='btn-primary my-3 mx-3' onClick={lClick} >
                Convert to lowercase
            </button>
            <button className='btn-primary my-3 ' onClick={dClick} >
                Clear Text
            </button>
            <button className='btn-primary my-3 mx-3' onClick={cClick} >
                Copy Text
            </button>
            <button className='btn-primary my-3 mx-1' onClick={esClick} >
                Remove Extra Spaces
            </button>
            
        </div>
    </div>
    <div className="container my-3" 
    style={{backgroundColor: props.mode==='light'?'white':'black' ,color:props.mode==='light'?'black':'white'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words & {text.length} Characters</p>
        <p>It will take  nearly about {0.008*text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Above Text Area is Empty"}</p>
    </div>
    </>
  )
}
