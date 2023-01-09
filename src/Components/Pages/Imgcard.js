import React from 'react'
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import img1 from '../../Assets/Images/baht-sign.png';
import img2 from '../../Assets/Images/certificate-variant-with-image.png';
import img3 from '../../Assets/Images/dollar.png';
import img4 from '../../Assets/Images/down.png';
import img5 from '../../Assets/Images/floral-bell-variant-outline-with-flower-buds-and-vines.png';
import img6 from '../../Assets/Images/football-ball-variant.png';
import img7 from '../../Assets/Images/open-book-variant-with-silhouette.png';
import img8 from '../../Assets/Images/twitter.png';
const Imgcard = () => {
    return (
        <div className='imagecardoverall'>
            <Container fluid className="imgcontainer">
            <Row>
                    <Col className='col-12 col-sm-12 col-md-3 img1'  >
                        <img src={img1} width="28" />
                        <h6>minimal design</h6>
                        <p>Some quick example text to build</p>
                        <p>bulk of the card's content</p>
                    </Col>
                    <Col className='col-12 col-sm-12 col-md-3 img1'>
                        <img src={img2} width="28" />
                        <h6>minimal design</h6>
                        <p>Some quick example text to build</p>
                        <p>bulk of the card's content</p>
                    </Col>
                    <Col className='col-12 col-sm-12 col-md-3 img1' >
                        <img src={img3} width="28" />
                        <h6>minimal design</h6>
                        <p>Some quick example text to build</p>
                        <p>bulk of the card's content</p>
                    </Col>
                    <Col className='col-12 col-sm-12 col-md-3 img1' >
                        <img src={img4} width="28" />
                        <h6>minimal design</h6>
                        <p>Some quick example text to build</p>
                        <p>bulk of the card's content</p>
                    </Col>
                    <Col className='col-12 col-sm-12 col-md-3 img2' >
                        <img src={img5} width="28" />
                        <h6>minimal design</h6>
                        <p>Some quick example text to build</p>
                        <p>bulk of the card's content</p>
                    </Col>
                    <Col className='col-12 col-sm-12 col-md-3 img2' >
                        <img src={img6} width="28" />
                        <h6>minimal design</h6>
                        <p>Some quick example text to build</p>
                        <p>bulk of the card's content</p>
                    </Col>
                    <Col className='col-12 col-sm-12 col-md-3 img2' >
                        <img src={img7} width="28" />
                        <h6>minimal design</h6>
                        <p>Some quick example text to build</p>
                        <p>bulk of the card's content</p>
                    </Col>
                    <Col className='col-12 col-sm-12 col-md-3 img2' >
                        <img src={img8} width="28" />
                        <h6>minimal design</h6>
                        <p>Some quick example text to build</p>
                        <p>bulk of the card's content</p>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default Imgcard