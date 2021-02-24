import React, {useContext} from 'react'
import {
    Container,
    Button
} from 'react-bootstrap'
import {
    MdTrendingFlat
} from 'react-icons/md'
import './banner.css'
import NaggerContext from '../../context/NaggerContext'


function Banner() {
    const naggerContext = useContext(NaggerContext)
    const {openModal} = naggerContext
    return (
        <Container fluid className='banner-container'>
            <Container fluid='md'>
                <div className='banner-content-container'>
                    <h1 className='banner-heading'>
                        Don't Worry <span className='span-class'>Set a</span> Reminder
                    </h1>
                    <Button className='reminder-button' onClick={openModal}>
                        Set a Reminder <MdTrendingFlat className='arrow-icon'/>
                    </Button>
                </div>
            </Container>
        </Container>
    )
}

export default Banner
