import {useState } from 'react';
import './style.css';
import ColorBox from './components/ColorBox'

function App() {

  const [Colors,setColors]= useState(["#AA55BB","#22AA55","#AA44FF"])
  const [lockedColors,setLockedColors]=useState([])
  const [prevColors,setPrevColors]= useState([])

  const genColors=()=>{
    var newColors=[]
    setPrevColors(Colors)
    for (let col in Colors){
      console.log("TEST"+Colors[col]+" "+lockedColors);
      if (lockedColors.includes(Colors[col])){
        newColors.push(Colors[col])
        continue
      }
      newColors.push("#"+(Math.random()*16777215).toString(16).split('.')[0])
    }
    console.log(newColors);
    setColors(newColors)
  }

  document.body.onkeydown=  function(e){
    if (e.key===" "){
      genColors()
    }else if(e.key==="Backspace"){
      setLockedColors([])
      setColors(prevColors)
    }
  }

 


  return (
    <div className="App">
      {Colors.map((color)=>
      <ColorBox key={Colors.indexOf(color)} bgCol={color} boxWidth={Colors.length} lockedCols={setLockedColors} lockedList={lockedColors}/>
      )}
    </div>
  );
}

export default App;
