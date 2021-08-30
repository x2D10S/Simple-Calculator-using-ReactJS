import './App.css';
import React, { useState } from 'react';
import Title from "./title"

function App() {
  const [result,setResult]=useState("");
  const clear=()=>{
    setResult("");
  }
  const backspace=()=>{
    setResult(result.slice(0,result.length - 1));
  }
  const calcinput=(e)=>{
    setResult(result.concat(e.target.name))
  }
  const calcoutput=()=>{
    try{
      setResult(eval(result).toString());
    }
    catch(err){
      setResult("Error");
    }
   }
  return (<div className="test">
    <Title />
    <div className="App">
  <form>
  <input type="text" value={result} />
</form>
<div className="keypad">
<button className="highlight" onClick={clear} id="clear">Clear</button>
<button className="highlight" onClick={backspace} id="backspace">C</button>
<button className="highlight" onClick={calcinput} name="/">&divide;</button>
<button onClick={calcinput} name="7">7</button>
<button onClick={calcinput} name="8">8</button>
<button onClick={calcinput} name="9">9</button>
<button className="highlight" onClick={calcinput} name="*">&times;</button>
<button onClick={calcinput} name="4">4</button>
<button onClick={calcinput} name="5">5</button>
<button onClick={calcinput} name="6">6</button>
<button className="highlight" onClick={calcinput} name="-">-</button>
<button onClick={calcinput} name="1">1</button>
<button onClick={calcinput} name="2">2</button>
<button onClick={calcinput} name="3">3</button>
<button className="highlight" onClick={calcinput} name="+">+</button>
<button onClick={calcinput} name="0">0</button>
<button className="highlight" onClick={calcinput} name=".">.</button>
<button className="highlight" onClick={calcoutput} id="=">=</button>
</div>
</div></div>
    
  );
}

export default App;
