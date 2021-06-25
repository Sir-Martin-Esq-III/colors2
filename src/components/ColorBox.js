import React from 'react';
import LockIcon from '@material-ui/icons/Lock';
import FileCopyIcon from '@material-ui/icons/FileCopy';

function ColorBox(props) {

    const bWidth=100/props.boxWidth+"vw";
    const textColor="color-mix(#FFFFFF,"+props.bgCol+")"

    const clipboardColor=()=>{
        alert("Copied");
        navigator.clipboard.writeText(props.bgCol)
    }
    
    const lockColor=()=>{
        //Check if the current element is already locked
        alert("Locked")
        props.lockedCols(props.bgCol)
    }
    console.log(textColor);
    return (
        <div className="ColorBox-container" style={{backgroundColor:props.bgCol, width:bWidth}}>
            <div className="colorBox-content">
                <ul className="content-list">
                    <LockIcon style={{color:textColor}} className="lock"  onClick={lockColor}/>
                    <FileCopyIcon className="Copy" onClick={clipboardColor}/>
                    <h1>{props.bgCol}</h1>
                </ul>
            </div>
            
        </div>
    );
}

export default ColorBox;   