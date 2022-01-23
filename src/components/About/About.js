import React from 'react'; 
import classes from './About.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJsSquare, faPython, faNode, faBootstrap, faReact, faGitAlt, faSass } from '@fortawesome/free-brands-svg-icons'
import { Icon } from '@iconify/react';

const About = () =>{
    return(
        <>
            <Container fluid className={classes.container} id="About">
                <h2 className={classes.sectionTitle}>About</h2>
                <Row className="w-75 text-left m-auto pb-3">
                    <p>Hello, my name is Nicole, and I love tinkering with new things and putting them together to create something awesome. 
                        I went to college at Yonsei University in South Korea, where I learned how to work with people from diverse background and adapt to unfamiliar settings.
                         I earned dual degrees in Creative Technology Management and Energy and Environmental Science and Engineering. 
                         My degrees taught me organizational skills, leadership and teamwork, and ignited my passion to create something new, especially those that can improve people’s lives, as an engineer.
                    </p>
                </Row>

                <Row className="w-75 text-left m-auto pb-3">
                    <p>I was first introduced to programming in college and instantly realized it was my passion.
                         I am a self-taught programmer and am in love with programming because it has enabled me to turn my ideas into results.
                         Should you have time, please check what has been on my mind by checking out my portfolio below. 😊
                    </p>
                </Row>

                <Row className="w-75 text-left m-auto pb-3">
                    <p>Technology I work with: </p>
                </Row>

                <Row className={`${classes.icons} text-center w-75 m-auto`}>
                    <Col><FontAwesomeIcon icon={faJsSquare}></FontAwesomeIcon></Col>
                    <Col><FontAwesomeIcon icon={faPython}></FontAwesomeIcon></Col>
                    <Col><Icon icon="grommet-icons:golang" /></Col>
                    <Col><FontAwesomeIcon icon={faNode}></FontAwesomeIcon></Col>
                    <Col><FontAwesomeIcon icon={faReact}></FontAwesomeIcon></Col>
                </Row>
                <Row className={`${classes.icons} text-center w-75 m-auto`}>
                    <Col><FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon></Col>
                    <Col><FontAwesomeIcon icon={faCss3Alt}></FontAwesomeIcon></Col>
                    <Col><FontAwesomeIcon icon={faGitAlt}></FontAwesomeIcon></Col>
                    <Col><FontAwesomeIcon icon={faBootstrap}></FontAwesomeIcon></Col>
                    <Col><FontAwesomeIcon icon={faSass}></FontAwesomeIcon></Col>
                </Row>


            </Container>

            <p className={classes.dots}>.....</p>
        </>
    )
}

export default About