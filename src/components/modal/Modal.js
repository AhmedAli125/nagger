import React, {useState, useContext} from 'react'
import NaggerContext from '../../context/NaggerContext'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import './modal.css'

function CustomModal() {
    const naggerContext = useContext(NaggerContext)
    const {
        isModalOpen,
        closeModal
    } = naggerContext
    return (
        <Modal Modal show = {
            isModalOpen
        }
        onHide = {
            closeModal
        }
        centered
        animation = {
            false
        }
        >
            <Modal.Header closeButton>
            <Modal.Title>Create New Reminder</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="form-number">
                        <Form.Label>Enter Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="+92-321-3213211" />
                    </Form.Group>
                    
                    <Form.Group controlId="form-title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Title for Reminder" />
                    </Form.Group>
                    
                    <Form.Group controlId="form-schedule">
                        <Form.Label>Schedule Reminder</Form.Label>
                        <Form.Control type="date"/>
                    </Form.Group>

                    <div className='checkbox-container'>
                        <p className='pt-3'>
                            Reminder Repeatedly
                        </p>
                        <Row>
                            <Col sm={4} md={4} lg={4}>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Every 5 Mins" />
                                </Form.Group>
                            </Col>
                            <Col sm={4} md={4} lg={4}>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Every 30 Mins" />
                                </Form.Group>
                            </Col>
                            <Col sm={4} md={4} lg={4}>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Every 1 Hour" />
                                </Form.Group>
                            </Col>
                            <Col sm={4} md={4} lg={4}>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Every Day" />
                                </Form.Group>
                            </Col>
                            <Col sm={4} md={4} lg={4}>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Every Week" />
                                </Form.Group>
                            </Col>
                            <Col sm={4} md={4} lg={4}>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Every Month" />
                                </Form.Group>
                            </Col>
                            <Col sm={4} md={4} lg={4}>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Every Year" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
                Close
            </Button>
            <Button variant="primary" onClick={closeModal}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CustomModal
