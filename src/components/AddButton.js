import React from 'react';
import AddIcon from '@material-ui/icons/Add';

function Addbutton(props) {

    var len=props.colors.length
    const addColor=()=>{
        //Check if the array is too big. More than 10? or 5???s
        if(len<10){
            const newCol=props.newHexGen()
            props.setColors(props.colors.concat(newCol))
        }
    }
    var bgCol=(len>=10? "grey":"white")
    return (
        <div className="add-icon-container" style={{backgroundColor:bgCol}} id="button" onClick={addColor}>
            <AddIcon  />
        </div>
    );
}

export default Addbutton;