import { React, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import CreatePlanetBtn from './CreatePlanetBtn';



        
const ModalPlanetAdd = () => {
    const [displayModal, setDisplayModal] = useState(false);
        const showModal = (e) => {
            e.preventDefault();
            setDisplayModal(true);
        }
        const hideModal = () => {
            setDisplayModal(false);
        }
    
    return (
            <div>
        
                <a onClick={showModal}  href="/planet/modalplanetadd" className="plus-cont rounded-circle d-flex justify-content-center align-items-center text-decoration-none position-absolute ">
                <div className="plus display-6 "></div>
                 </a>

                <Modal show={displayModal} onHide={hideModal}  className=""    >
               
                    <Modal.Header size="md" className="modal-header" >
                        <Modal.Title className="modal-title text-start fw-bolder" id="">Planet</Modal.Title>
                        <Button type="button" className="btn-close" onClick={hideModal}  closeButton></Button>
                    </Modal.Header>
                    <Modal.Body className="modal-body">
                        <Form className=" fs-3">
                            <Form.Group className="">
                                <Form.Label for="form-image">Image</Form.Label>
                                <Form.Control  type="url" id="form-image" />
                                <Form.Text>Paste the URL of a JPG or PNG of max 20kb</Form.Text>
                            </Form.Group>
                            <Form.Group className="">
                                <Form.Label for="form-name" >Name</Form.Label>
                                <Form.Control type="text" id="form-name" />
                            </Form.Group>
                            <Form.Group className="">
                            <Form.Label for="form-description" >Description</Form.Label>
                                <Form.Control as="textarea" rows={3}  id="form-description"  />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer className="modal-footer">
                        <Button type="button" className="btn btn-cancel" onClick={hideModal}>CANCEL</Button>
                        <CreatePlanetBtn onClick={hideModal} >CREATE PLANET</CreatePlanetBtn>
                    </Modal.Footer>
                </Modal>
                            
           
            </div>
    )
}

export default ModalPlanetAdd;
