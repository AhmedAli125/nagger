import React, {useState, useContext} from 'react'
import NaggerContext from '../../context/NaggerContext'
import { Modal, Form, Row, Col } from 'react-bootstrap'
import './modal.css'

function CustomModal() {
    const naggerContext = useContext(NaggerContext)
    const {
        isModalOpen,
        closeModal
    } = naggerContext

    const [phoneNo, setPhoneNo] = useState('');
    const handlePhoneNo = e => {
        setPhoneNo(e.target.value)
    }

    const [title, setTitle] = useState('');
    const handleTitle = e => {
        setTitle(e.target.value)
    }

    const [date, setDate] = useState('');
    const handleDate = e => {
        setDate(e.target.value)
    }

    const [reminder, setReminder] = useState([
        {
            id: 1,
            value: 'Every 5 mins',
            isChecked: false
        },
        {
            id: 2,
            value: 'Every 30 mins',
            isChecked: false
        },
        {
            id: 3,
            value: 'Every 1 Hour',
            isChecked: false
        },
        {
            id: 4,
            value: 'Everyday',
            isChecked: false
        },
        {
            id: 5,
            value: 'Every week',
            isChecked: false
        },
        {
            id: 6,
            value: 'Every month',
            isChecked: false
        },
        {
            id: 7,
            value: 'Every year',
            isChecked: false
        }
    ])


    const handleReminder = e => {
        let newReminder = reminder.map(reminderValue => {
            if (reminderValue.value === e.target.value) {
                let newValue = e.target.checked;
                reminderValue.isChecked = newValue;
            }
            return reminderValue
        })
        setReminder(newReminder)
    }



    const [reminderContent, setReminderContent] = useState('')
    const handleReminderContent = e => {
        setReminderContent(e.target.value)
    }

    const submit = () => {
        let newReminder = {
            phoneNo,
            title,
            date,
            reminder,
            reminderContent
        }

        console.log(newReminder)
        closeModal()
    }

    return (
        <Modal Modal show = {
            isModalOpen
        }
        onHide = {
            closeModal
        }
        // centered
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
                        <Form.Control
                            type="text"
                            placeholder="+92-321-3213211"
                            value={ phoneNo }
                            onChange={handlePhoneNo}
                        />
                    </Form.Group>
                    
                    <Form.Group controlId="form-title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Title for Reminder"
                            value={ title }
                            onChange={handleTitle}
                        />
                    </Form.Group>
                    
                    <Form.Group controlId="form-schedule">
                        <Form.Label>Schedule Reminder</Form.Label>
                        <Form.Control
                            type="date"
                            value={ date }
                            onChange={handleDate}
                        />
                    </Form.Group>

                    <div className='checkbox-container'>
                        <p className='pt-1'>
                            Reminder Repeatedly
                        </p>
                        <Row>
                            {
                                reminder.map(reminder => (
                                    <Col sm={4} md={4} lg={4}>
                                        <Form.Group controlId={`form-checkbox-${reminder.id}`}>
                                            <Form.Check
                                                type="checkbox"
                                                label={ reminder.value }
                                                key={ reminder.id }
                                                value={ reminder.value }
                                                onChange={handleReminder}
                                            />
                                        </Form.Group>
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>

                    <Form.Group controlId="form-textarea" className='form-textarea'>
                        <Form.Label>Content of Your Reminder</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={ 3 }
                            className='form-textarea'
                            value={ reminderContent }
                            onChange={handleReminderContent}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <div className='modal-footer'>
                <button variant="secondary" onClick={closeModal} className='custom-button'>
                    Close
                </button>
                <button
                    onClick={submit}
                    className='custom-button send-button'
                >
                    
                    Send
                </button>
            </div>
        </Modal>
    )
}

export default CustomModal
