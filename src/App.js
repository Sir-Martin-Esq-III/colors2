import {useState } from 'react';
import './style.css';
import ColorBox from './components/ColorBox'

function App() {

  const [Colors,setColors]= useState(["#AA55BB","#22AA55","#AA44FF"])
  const [lockedColors,setLockedColors]=useState([])
  const [prevColors,setPrevColors]= useState([])
  
//Generates a new array of colors
  const genColors=()=>{
    var newColors=[]
    setPrevColors(Colors)
    for (let col in Colors){
      console.log("TEST"+Colors[col]+" "+lockedColors);
      if (lockedColors.includes(Colors[col])){
        newColors.push(Colors[col])
        continue
      }
      //Creates a new hex value and converts it to a vaild hex color string
      newColors.push("#"+(Math.random()*16777215).toString(16).split('.')[0].toUpperCase())
    }
    setColors(newColors)
  }

  //Checks for space press or backspace 
  document.body.onkeydown=  function(e){
    //Space pressed? generate new colors
    if (e.key===" "){
      genColors()
      //BackspacePressed? go back to the previous colors
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
