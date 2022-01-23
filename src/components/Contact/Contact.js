import React from 'react'; 
import classes from './Contact.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return(
    <Container fluid className={classes.contact} id="Contact">
        <h2 className={classes.sectionTitle}>Contact</h2>
        <p>
            <span className={classes.blueText}>Thanks for stopping by!</span> <br></br>
            <span className={classes.grayText}>Feel free to email me or find me on social media :)</span>
        </p>

        <Row>
            <a className={`${classes.email} text-center`} href="mailto:nicolewert@yahoo.com">nicolewert@yahoo.com</a>
        </Row>
        <Row className={`${classes.iconGroup} text-center`}>
            <Col>
                <a href='https://www.linkedin.com/in/nicole-wert-205981187/'><FontAwesomeIcon icon={faLinkedinIn} className={classes.icon}></FontAwesomeIcon></a>
                <a href="https://github.com/nicolewert"><FontAwesomeIcon icon={faGithub} className={classes.icon}></FontAwesomeIcon></a>
            </Col>
        </Row>
        <Row>
            <p className={classes.credit}>Developed & Designed by Nicole Wert</p>
        </Row>
    </Container>
    ); 
}

export default Contact