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
             <Container fluid  className="cardbgclr" >
                <Text/>
                <Row className="cardcol gx-3 gy-2 justify-content-center">
                    <Col className='col-10'>
                    <Row className=' gy-5 justify-content-center'>
                    <Col className='col-10 col-xs-10 col-sm-10 col-md-4 col-lg-4  carwidth  '>
                        <Card style={{ width: '90%' }}>
                            <Card.Body className='pb-4'>
                                <p className='cardpara'>Free Forever</p>
                                <Card.Title className='cardfontweight'>Free</Card.Title>
                                <Card.Subtitle className="mb-2">I created this for a supposed personal blog for</Card.Subtitle>
                                <Card.Text>
                                <ul className='listsize'>
                                <li>Some quick example text to build  </li>
                                    <li> and make up the bulk of the.</li>
                                    <li>  bulk of the card's content</li>
                                    </ul>
                                </Card.Text>
                                <Button className='cardbutton'>SignupforFree</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-10 col-xs-10 col-sm-10 col-md-4 col-lg-4 carwidth  '>
                        <Card style={{ width: '90%' }} >
                            <Card.Body className='pb-4'>
                            <p className='cardpara'>For Terms</p>
                                <Card.Title className='cardfontweight'>$20 <span>/Mo</span></Card.Title>
                                <Card.Subtitle className="mb-2 cardlineheight">I created this for a supposed personal blog for</Card.Subtitle>
                                <Card.Text>
                                <ul className='listsize'>
                                <li>Some quick example text to build  </li>
                                    <li> and make up the bulk of the.</li>
                                    <li>  bulk of the card's content</li>
                                    </ul>
                                </Card.Text>
                                <Button  className='cardbutton'>Start14-day Trial</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-10 col-xs-10 col-sm-10 col-md-4 col-lg-4 carwidth'>
                        <Card style={{ width: '90%' }} >
                            <Card.Body className='pb-4 lastcard'>
                            <p className='cardpara'>For Enterprises</p>
                                <Card.Title className='cardfontweight'>$140 <span>/Mo</span></Card.Title>
                                <Card.Subtitle className="mb-2 cardlineheight">I created this for a supposed personal blog for  </Card.Subtitle>
                                <Card.Text>
                                    <ul className='listsize'>
                                    <li>Some quick example text to build  </li>
                                    <li> and make up the bulk of the.</li>
                                    <li>  bulk of the card's content</li>
                                    
                                    </ul>
                                </Card.Text>
                                <Button className='cardbuttonlast'>Start14-day Trial</Button>
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