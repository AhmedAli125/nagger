import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import Card from './Card'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'

function CardList() {
    return (
        <Container fluid='lg' className='card-list'>
            <Row>
                <Col>
                    <Card
                        image={ image1 }
                        title='Card Title'
                        body='Card Body Text Card Body Text Card Body Text Card Body Text Card Body Text '
                    />
                </Col>
                <Col>
                    <Card
                        image={ image2 }
                        title='Card Title'
                        body='Card Body Text Card Body Text Card Body Text Card Body Text Card Body Text '
                    />
                </Col>
                <Col>
                    <Card
                        image={ image3 }
                        title='Card Title'
                        body='Card Body Text Card Body Text Card Body Text Card Body Text Card Body Text '
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default CardList
