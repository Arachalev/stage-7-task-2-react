import React,{useState} from 'react'
import { Modal,Button,Form } from 'react-bootstrap';
import {  PlusCircleFill} from 'react-bootstrap-icons'
import './styledComponents/AddForm.css'

function AddForm({name}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
     const [message, setmessage] = useState(false)


    return (
        <div className="addForm">
            <PlusCircleFill onClick={handleShow}/>
            <Modal  show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
          <h4 className="font-weight-bold">{name}</h4>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" className="bg-light" size="sm"/>
                    <p className="font-weight-light">Copy and paste the Url of an image</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" className="bg-light" size="sm"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} className="bg-light" size="sm"/>
                </Form.Group>
                <Form.Control.Feedback type="invalid" >
                    Please choose a username.
                </Form.Control.Feedback>
                {message && <p className='text-danger'>bummer we can't create your page right now.Probably
                a block in the way, try again later</p>}
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="dark" onClick={()=>setmessage(true)}>
            CREATE {name}
          </Button>
        </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddForm
