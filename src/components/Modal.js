import React, { useState } from 'react';
import { Modal, Backdrop, styled } from '@material-ui/core';



function ModalComp(props) {   

    const [open,setOpen]=useState(true)

    const styledModal={
      modal:{
        width:"fit-content",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        outline:"none",
    },

    content:{
      width:"100%",
      height:"100%",
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
      
      className={styledModal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      style={{display:"flex", placeContent:"center",height:"100%", alignItems:"center"}}
      
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