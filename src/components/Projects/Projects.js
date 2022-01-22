import React from 'react'; 
import classes from './Projects.module.css'; 
import {Container, Row, Col, Button} from 'react-bootstrap'; 
import CardUI from '../CardUI/CardUI'; 
import coffeeJapaneseImg from '../../assets/coffee-japanese-wireframe.png'; 
import mokuMokuImg from '../../assets/moku-moku-card.png'
import pikachuImg from '../../assets/pikachu-tribute.png'

const Projects = () => {
    return(
        <Container fluid className={classes.container} id="Projects">
            <h2 className={classes.sectionTitle}>Projects</h2>
            <Row className="w-75 m-auto">
                <Col>
                    <CardUI 
                        imgSrc = {coffeeJapaneseImg}
                        title = "Coffee Japanese" 
                        briefDesc = "Japanese language study app - learn a language in the time it takes to drink a coffee" 
                        list = {[
                            "MERN Stack",
                            "External API calls" 
                        ]}
                        gitLink = ""
                        extLink = ""
                    />
                </Col>
                <Col>
                    <CardUI 
                        imgSrc = {mokuMokuImg}
                        title = "Moku Moku Flashcards" 
                        briefDesc = "A flashcard memorization app" 
                        list = {[
                            "International and remote team project",
                            "Backend: Go Microservices, Postgres, Cassandra, Mongodb",
                            "Frontend: React, Modular CSS"
                        ]}
                        gitLink = ""
                        extLink = ""
                    />  
                </Col>
                <Col>
                    <CardUI 
                        imgSrc = {pikachuImg}
                        title = "Pikachu Tribute Website" 
                        briefDesc = "A website dedicated to information on Pikachu" 
                        list = {[
                            "HTML & SCSS with Parcel", 
                            "Figma Design"
                        ]}
                        gitLink = "https://github.com/nicolewert/FCC-tribute-pikachu"
                        extLink = "https://nicolewert.github.io/FCC-tribute-pikachu/"
                    />
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <Button variant="secondary" href="https://github.com/nicolewert?tab=repositories" className={classes.buttons}>More projects</Button>
                </Col>
            </Row>
           
        </Container>
    )
}

export default Projects