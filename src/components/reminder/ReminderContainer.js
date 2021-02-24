import React from 'react'
import { Container } from 'react-bootstrap'
import CardList from './CardList'
import './remindercontainer.css'

function ReminderContainer() {
    return (
        <Container fluid='md' className='align-top'>
            <h1 className='reminder-heading'>
                Perfect Place for Reminders
            </h1>
            <CardList/>
        </Container>
    )
}

export default ReminderContainer
