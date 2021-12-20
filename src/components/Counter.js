import React, { Component } from 'react'
import Button from './Button'

import {useState} from 'react'

export default function Counter({val}) {
  val=parseInt(val);

  const [counter,setCounter]= useState(val);
  function inc(){
setCounter(counter + 1);
  }
  function dec (){
    setCounter(counter - 1);
  }
  
  
  return (
    <div  style={{backgroundColor:"rgba(21,213,93,0.5)" , display:"grid",placeContent:"center" ,marginTop:"15%"}}>
      <h1>Counter</h1>
<div>
      <button
        style={{  width: "50px", backgroundColor: "red", border: "0px" ,boxShadow:"1px 2px 0.1px" }}
        onClick={dec}
      >
        -
      </button>
      <span style={{ padding:"10px", display: "inline-block", fontSize:"40px" }}> {counter}</span>
      <button
        style={{ width: "50px", backgroundColor: "green", border: "0px",boxShadow:"1px 2px 0.1px" }}
        onClick={inc}
      >
        +
      </button>
      </div>
    </div>
  );
  
  
}
