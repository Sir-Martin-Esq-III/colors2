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
    
    console.log(textColor);
    return (
        <div className="ColorBox-container" style={{backgroundColor:props.bgCol, width:bWidth}}>
            <div className="colorBox-content">
                <ul className="content-list">
                    <LockIcon className="lock"/>
                    <FileCopyIcon className="Copy" onClick={clipboardColor}/>
                </ul>
            </div>
            
        </div>
    );
}

export default ColorBox;