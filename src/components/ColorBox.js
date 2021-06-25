import React, {useState } from 'react';
import LockIcon from '@material-ui/icons/Lock';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import tinycolor from '@ctrl/tinycolor';

function ColorBox(props) {

    var tc=new tinycolor(props.bgCol)
    var itemColor=(tc.isDark()?tc.lighten(25).toString():tc.darken(25).toString())
    
    const bWidth=100/props.boxWidth+"vw";
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
    var lockIcon=(locked?
                <LockIcon style={{color:itemColor}} className="icon"  onClick={lockColor}/>:
                <LockOpenIcon style={{color:itemColor}} className="icon"  onClick={lockColor}/>)
   

    return (
        <div className="ColorBox-container" style={{backgroundColor:props.bgCol, width:bWidth}}>
            <div className="colorBox-content">
                <ul className="content-list">
                    {lockIcon}
                    <FileCopyIcon style={{color:itemColor}}className="icon" onClick={clipboardColor}/>
                    <h1 style={{color:itemColor}}className="icon"onClick={clipboardColor}>{props.bgCol}</h1>
                </ul> 
            </div>
            
        </div>
    );
}

export default ColorBox;   