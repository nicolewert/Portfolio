import React from 'react'; 
import hangingCat from '../../assets/hangingCat.svg'; 
import {Container, Row, Col} from 'react-bootstrap'; 
import classes from './Home.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ArrowDown } from 'react-bootstrap-icons';

const Home = () => {
    return(
            <Container fluid className={`${classes.container} text-center`} id="Home">

                <Row>
                    <Col>
                        <h1 className={classes.name}>Nicole Wert</h1>
                    </Col>
                </Row>

                <Row className='justify-content-center'>
                    <img className={classes.catImg} src={hangingCat} alt="cartoon cat hanging down"></img>                       
                    <h3 className={classes.catText}>A Full Stack Software Engineer</h3>
                </Row>
                
                <Row className={classes.iconGroup}>
                    <Col>
                        <a href='https://www.linkedin.com/in/nicole-wert-205981187/'><FontAwesomeIcon icon={faLinkedinIn} className={classes.icon}></FontAwesomeIcon></a>
                        <a href="https://github.com/nicolewert"><FontAwesomeIcon icon={faGithub} className={classes.icon}></FontAwesomeIcon></a>
                        <a href="#Contact"><FontAwesomeIcon icon={faEnvelope} className={classes.icon}></FontAwesomeIcon></a>
                    </Col>
                </Row>

                <Row>
                    <ArrowDown className={classes.arrow}/>
                </Row>

            </Container>
    )
}

export default Home