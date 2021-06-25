import React from 'react';
import RemoveIcon from '@material-ui/icons/Remove';

function RemoveButton(props) {
    var len=props.col.length
    const remCol=()=>{
        if(len>1){
            var newCols=Array.from(props.col)
            console.log(newCols)
            newCols.splice(newCols.length-1,1)
            props.setCol(newCols)
            
        }
    }

    var bgCol=(len<=1? "grey":"white")
    return (
        <div className="rem-icon-container" style={{backgroundColor:bgCol}} id="button" onClick={remCol}>
            <RemoveIcon  />
        </div>
    );
}

export default RemoveButton;