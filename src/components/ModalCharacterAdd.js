import { React, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import CreateCharacterBtn from './CreateCharacterBtn';
// import FriendsAdd from './FriendsAdd';
import Character3 from '../assets/characters/character-3.png';



const ModalCharacterAdd = () => {

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
            <a onClick={showModal}  href="/character/modalcharacteradd" className="plus-cont rounded-circle d-flex justify-content-center align-items-center text-decoration-none position-absolute ">
                <div className="plus display-6 "></div>
            </a>

                    <Modal show={displayModal} onHide={hideModal}> 
                        <Modal.Header size="md" className="modal-header" >
                            <Modal.Title className="modal-title text-start fw-bolder" id="">Character</Modal.Title>
                            <Button type="button" className="btn-close" onClick={hideModal}  closeButton></Button>
                        </Modal.Header>
                        <Modal.Body className="modal-body ">
                                
                            <Form className="fs-3">
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
                                <Form.Group className="">
                                    <Form.Label for="add-friends">
                                        Friends
                                    </Form.Label>
                                    <Form.Select>
                                        <option>Open this select menu</option>
                                        <option value="1"><div className="d-flex justify-content-between align-items-center fr">
                                                <img src={Character3} />
                                                <p className="fs-6 fw-light">Jane Cooper</p>
                                                
                                            </div>
                                        </option>
                                        <option value="2"></option>
                                        <option value="3"></option>
                                    </Form.Select>
                                </Form.Group>
                            </Form>
                        </Modal.Body> 
                        <Modal.Footer>
                        <Button type="button" className="btn btn-cancel" onClick={hideModal}>CANCEL</Button>
                        <CreateCharacterBtn onClick={hideModal}>CREATE CHARACTER</CreateCharacterBtn>
                        </Modal.Footer>
                    </Modal>    
        </div>
    )
}

export default ModalCharacterAdd;
