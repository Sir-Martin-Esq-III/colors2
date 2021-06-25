import React, { useEffect, useState } from 'react';
import LockIcon from '@material-ui/icons/Lock';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import LockOpenIcon from '@material-ui/icons/LockOpen';

function ColorBox(props) {

    const bWidth=100/props.boxWidth+"vw";
    const textColor="color-mix(#FFFFFF,"+props.bgCol+")"
    const [locked, setLocked]=useState(false)
   

    const clipboardColor=()=>{
        alert("Copied");
        navigator.clipboard.writeText(props.bgCol)
    }
    
    const lockColor=()=>{
        //Check if the current element is already locked
        // If this is not in the lockedList
        if(props.lockedList.includes(props.bgCol)===false){
            alert("Locked")
            setLocked(true)
            props.lockedCols(props.lockedList.concat(props.bgCol));
        }else{
            alert("unlocked")
            setLocked(false)
            props.lockedList.splice(props.lockedList.indexOf(props.bgCol),1)
            props.lockedCols(props.lockedList)
        }

        //props.lockedCols(props.bgCol)
    }

    var lockIcon=<LockIcon style={{color:textColor}} className="lock"  onClick={lockColor}/>
    if (!locked){
        lockIcon=<LockOpenIcon style={{color:textColor}} className="lock"  onClick={lockColor}/>
    }


    console.log(textColor);
    return (
        <div className="ColorBox-container" style={{backgroundColor:props.bgCol, width:bWidth}}>
            <div className="colorBox-content">
                <ul className="content-list">
                    {lockIcon}
                    <FileCopyIcon className="Copy" onClick={clipboardColor}/>
                    <h1>{props.bgCol}</h1>
                </ul>
            </div>
            
        </div>
    );
}

export default ColorBox;   