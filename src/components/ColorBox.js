import React, {useState } from 'react';
import LockIcon from '@material-ui/icons/Lock';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import LockOpenIcon from '@material-ui/icons/LockOpen';

function ColorBox(props) {

    const bWidth=100/props.boxWidth+"vw";
    const textColor="color-mix(#FFFFFF,"+props.bgCol+")"
    const [locked, setLocked]=useState(false)
   
    //Adds current Color to clipboard
    const clipboardColor=()=>{
        alert("Copied");
        navigator.clipboard.writeText(props.bgCol)
    }
    //Function to lock/unlock the color
    const lockColor=()=>{
        if(!locked){
            setLocked(true)
            props.lockedCols(props.lockedList.concat(props.bgCol));
        }else{
            setLocked(false)
            props.lockedList.splice(props.lockedList.indexOf(props.bgCol),1)
            props.lockedCols(props.lockedList)
        }
    }
    //Changes lock Icon 
    var lockIcon=<LockIcon style={{color:props.bgCol, mixBlendMode: "multiply"}} className="icon"  onClick={lockColor}/>
    if (!locked){
        lockIcon=<LockOpenIcon style={{color:props.bgCol, mixBlendMode: "multiply"}} className="icon"  onClick={lockColor}/>
    }


    console.log(textColor);
    return (
        <div className="ColorBox-container" style={{backgroundColor:props.bgCol, width:bWidth}}>
            <div className="colorBox-content">
                <ul className="content-list">
                    {lockIcon}
                    <FileCopyIcon style={{color:props.bgCol, mixBlendMode: "multiply"}}className="icon" onClick={clipboardColor}/>
                    <h1 style={{color:props.bgCol, mixBlendMode: "multiply"}}className="icon"onClick={clipboardColor}>{props.bgCol}</h1>
                </ul> 
            </div>
            
        </div>
    );
}

export default ColorBox;   