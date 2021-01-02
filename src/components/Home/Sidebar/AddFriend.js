import React from 'react'
import { AddGroup, NewChat } from '../../../assets/index'
import {Button,Modal} from 'react-bootstrap'
export default function AddFriend() {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
               <button className="btn btn-outline-light"
                                onClick={handleShow}>
                                <NewChat />
                            </button>
                            <Modal centered show={show} onHide={handleClose}>
                            <div className="modal-header">
                                            <h5 className="modal-title">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2">
                                                    </path>
                                                    <circle cx="8.5" cy="7" r="4"></circle>
                                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                                </svg> Add Friends
                                            </h5>
                                            <button type="button" class="close" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="alert alert-info fade show" role="alert">Send invitations to friends.</div>
                                            <form className="">
                                                <div className=" ">
                                                    <label for="email" className="">Email addresses</label>
                                                    <input name="email" id="email" type="text" class="form-control"/>
                                                    <div className=" ">
                                                        <label for="message" className="">Invitation message</label>
                                                        <textarea name="message" id="message" className="form-control"></textarea>
                                                    </div>
                                                    </div>
                                            </form>
                                                                            
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-primary">Submit
                                                </button>
                                            </div>
                                        </div>
                                    
                            </Modal>
                        </div>
    )
}
