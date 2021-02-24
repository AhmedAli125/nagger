import React from 'react'
import {
    Container,
    Button
} from 'react-bootstrap'
import {
    MdTrendingFlat
} from 'react-icons/md'
import './banner.css'


function Banner() {
    return (
        <Container fluid className='banner-container'>
            <Container fluid='md'>
                <div className='banner-content-container'>
                    <h1 className='banner-heading'>
                        Don't Worry <span className='span-class'>Set a</span> Reminder
                    </h1>
                    <Button className='reminder-button'>
                        Set a Reminder <MdTrendingFlat className='arrow-icon'/>
                    </Button>
                </div>
            </Container>
        </Container>
    )
}

export default Banner
