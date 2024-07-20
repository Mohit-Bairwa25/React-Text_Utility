import React from "react";

export default function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} 
    style={{backgroundColor: props.mode==='light'?'white':'rgb(33, 37, 41)' , color:props.mode==='light'?'black':'white'}}
    role="alert">
      <strong>{props.alert.type}</strong>:{props.alert.msg}
    </div>
  );
}