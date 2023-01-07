import React from 'react'
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Text from '../Pages/Text';
const Cardpage = () => {
    return (
        <div >
             <Container  fluid  className="cardbgclr" >
                <Text/>
                <Row className="cardcol gx-3 gy-2 justify-content-center">
                    <Col className='col-10'>
                    <Row className=' gy-5 justify-content-center'>
                    <Col className='col-10 col-xs-10 col-sm-10 col-md-4 col-lg-4  '>
                        <Card style={{ width: '90%' }}>
                            <Card.Body className='pb-4'>
                                <Card.Title>Free</Card.Title>
                                <Card.Subtitle className="mb-2 ">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                <ul className='listsize'>
                                <li>Some quick example text to build  </li>
                                    <li> and make up the bulk of the.</li>
                                    <li>  bulk of the card's content</li>
                                    </ul>
                                </Card.Text>
                                <Button className='cardbutton'  variant="secondary ">SignupforFree</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-10 col-xs-10 col-sm-10 col-md-4 col-lg-4'>
                        <Card style={{ width: '90%' }} >
                            <Card.Body className='pb-4'>
                                <Card.Title>$120</Card.Title>
                                <Card.Subtitle className="mb-2">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                <ul className='listsize'>
                                <li>Some quick example text to build  </li>
                                    <li> and make up the bulk of the.</li>
                                    <li>  bulk of the card's content</li>
                                    </ul>
                                </Card.Text>
                                <Button  className='cardbutton'  variant="secondary">Start14-day Trial</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-10 col-xs-10 col-sm-10 col-md-4 col-lg-4'>
                        <Card className="lastcard" style={{ width: '90%' }} >
                            <Card.Body className='pb-4'>
                                <Card.Title>$140</Card.Title>
                                <Card.Subtitle className="mb-2">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    <ul className='listsize'>
                                    <li>Some quick example text to build  </li>
                                    <li> and make up the bulk of the.</li>
                                    <li>  bulk of the card's content</li>
                                    </ul>
                                </Card.Text>
                                <Button className='cardbutton' variant="info">Start14-day Trial</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                    </Col>                    
                </Row>
            </Container>
        </div>
    )
}

export default Cardpage;