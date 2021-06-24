import { useEffect, useState } from 'react';
import './style.css';
import ColorBox from './components/ColorBox'

function App() {

  const [Colors,setColors]= useState(["#AA55BB","#22AA55","#AA44FF"])

  const genColors=()=>{
    var newColors=[]
    for (let itr in Colors){
      newColors.push("#"+(Math.random()*16777215).toString(16).split('.')[0])
      console.log((Math.random()*16777215).toString(16).split('.')[0])
    }

    setColors(newColors)
  }

  document.body.onkeydown=  function(e){
    if (e.key===" "){
      genColors()
    }
  }

 


  return (
    <div className="App">
      {Colors.map((color)=>
      <ColorBox key={Colors.indexOf(color)} bgCol={color} boxWidth={Colors.length}/>
      )}
    </div>
  );
}

export default App;
