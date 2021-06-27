import React, { useState } from 'react';
import { Modal, Backdrop, styled } from '@material-ui/core';



function ModalComp(props) {   

    const [open,setOpen]=useState(true)

    const styledModal={
      modal:{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    content:{
      width:"50%",
      height:"50%",
      backgroundColor:"white",
      borderRadius:"20px",
      paddingInline:"5%",
    },

    ul:{
      listStyle:'none'
    },
  
  
  }

      const handleClose = () => {
        setOpen(false);
      };

    return (
        
      <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className=""
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <div className="modal-container" style={styledModal.modal}>
        <div className="modal-content"style={styledModal.content}>
        <section>
        <h1>What is this?</h1>
        <p>This is a simple tool to generate color palletes</p>
        </section>
        <section>
        <h1>How to use?</h1>
        <ul style={styledModal.ul}>
          <li><h3>Change color</h3>
            <p>You can generate a new set of colors by pressing the spacebar</p>
          </li>
          <li><h3>Lock color</h3>
             <p>To lock and unlock a color, just click on the lock icon</p> 
          </li>
          <li><h3>Copy color</h3>
            <p>If you want to copy a colors hex code you can click on the clipboard icon OR click on the hex value</p>
          </li>
  
        </ul>
        </section>
      </div>
      </div>


    </Modal>
    );
}

export default ModalComp;