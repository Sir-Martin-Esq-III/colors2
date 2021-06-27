import {useState} from 'react';
import './style.css';
import ColorBox from './components/ColorBox'
import Addbutton from './components/AddButton';
import RemoveButton from './components/RemoveButton';
import ModalComp from './components/Modal';




function App() {

  const [Colors,setColors]= useState(["#3D72E3 ","#7CDF31","#F02390"])
  const [lockedColors,setLockedColors]=useState([])
  const [prevColors,setPrevColors]= useState([])
  
  
//Generates a new array of colors
  const genColors=()=>{
    var newColors=[]
    setPrevColors(Colors)
    for (let col in Colors){
      if (lockedColors.includes(Colors[col])){
        newColors.push(Colors[col])
        continue
      }
      //Creates a new hex value and converts it to a vaild hex color string
      var newCol=genNewHex()
      console.log(newCol)
      newColors.push(newCol)
    }
    setColors(newColors)
  }

  function genNewHex(){
      return String("#"+(Math.random()*16777215).toString(16).split('.')[0].toUpperCase())
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
      {/*<ModalComp/>*/}

      <div className="button-container">
        <RemoveButton setCol={setColors} col={Colors}/>
        <Addbutton setColors={setColors} colors={Colors} newHexGen={genNewHex}/>
      </div>
      {Colors.map((color)=>
      <ColorBox key={Colors.indexOf(color)} bgCol={color} boxWidth={Colors.length} lockedCols={setLockedColors} lockedList={lockedColors}/>
      )}
    </div>
  );
}

export default App;
