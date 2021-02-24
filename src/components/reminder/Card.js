import React from 'react'
import { Card } from 'react-bootstrap'

function CustomCard({image, title, body}) {
    return (
        <Card style={{ width: '18rem' }} className='card'>
        <Card.Img variant="top" src={image} className='card-image'/>
            <Card.Body>
                <Card.Title className='card-title'>{ title }</Card.Title>
                <Card.Text className='card-text'>
                    {body}
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
    </Card>
    )
}

export default CustomCard
