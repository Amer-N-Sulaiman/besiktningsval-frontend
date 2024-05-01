import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const EmailSubscription = ({ showProp }) => {
    const [show, setShow] = useState(false);
    const [closedManu, setClosedManu] = useState(false)

    function OffCanvasE({ name, ...props }) {
      
        const handleClose = () => {
            setShow(false);
            setClosedManu(true)
        }
        const handleShow = () => setShow(true);

        useEffect(()=>{
            if (!closedManu){
                setShow(showProp)
            }
        }), [];
      
        return (
          <>
            {/* <Button variant="primary" onClick={handleShow} className="me-2">
              {name}
            </Button> */}
            {show && <Offcanvas show={show} onHide={handleClose} {...props}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
              </Offcanvas.Body>
            </Offcanvas>}
          </>
        );
      }

   
    return (
        <>
        {['bottom'].map((placement, idx) => (
            <OffCanvasE key={idx} placement={placement} name={placement} />
        ))}
        </>
    );
      

}

export default EmailSubscription;





