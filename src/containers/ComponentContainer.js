import React, {useContext} from 'react'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'
import Banner from '../components/banner/Banner'
import Header from '../components/header/Header'
import CustomModal from '../components/modal/Modal'
import ReminderContainer from '../components/reminder/ReminderContainer'
import NaggerContext from '../context/NaggerContext'

function ComponentContainer() {

    const naggerContext = useContext(NaggerContext)
    const {isModalOpen} = naggerContext
    
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Header/>
                </Col>
            </Row>            
            <Row>
                <Col>
                    <Banner />
                </Col>
            </Row>            
            <Row>
                <Col>
                    <ReminderContainer/>
                </Col>
            </Row>      
            {isModalOpen && <CustomModal/>}
        </Container>
    )
}

export default ComponentContainer
