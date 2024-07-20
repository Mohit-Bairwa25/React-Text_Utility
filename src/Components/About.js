import React, {useState} from "react";

export default function About() {

    const [myStyle, setMyStyle] = useState ({
        color: 'black',
        backgroundColor:'white'
    })

    const [btntext, setBtnText]= useState("Dark Mode")

    const toggleStyle = ()=>{
        if(myStyle.color === 'white'){
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Dark Mode")
        }
        else{
            setMyStyle({
                color:'white',
                backgroundColor:'black',
                border:'1px solid white',
            })
            setBtnText("Light Mode")
        }
    }
  return (
    <div className='container' style={myStyle}>
        <h1>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Analyze Your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Convert your text to uppercase or lowercase..</strong> Use this tool to easily change the case of your text. Simply input your text and choose the desired conversion.his feature allows you to quickly copy your text to the clipboard, making it easy to paste it wherever you need.<code>Copy your text with a single click.</code>,
              ensuring a clean and professional look.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Free To Use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Enjoy all features at no cost.</strong> This text utility tool is completely free to use. You can access all functionalities without any hidden charges or subscriptions. <code>.It will be free Forever</code>,
              spend your money on important stuff.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Works seamlessly across all browsers.</strong> This tool is designed to be compatible with all major web browsers, ensuring a smooth experience whether you're using Chrome, Firefox, Safari, or Edge.<code>.But there might be some problem in mobile version</code>,
              but all the glitches will be fix soon.
            </div>
          </div>
        </div>
      </div>
      <button onClick={toggleStyle} type="button" className="btn btn-dark my-3">{btntext}</button>
    </div>
  );
}
