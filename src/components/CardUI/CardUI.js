import React from 'react'; 
import {Card, ListGroup} from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import classes from './CardUI.module.css'; 

const CardUI = ({imgSrc, title, briefDesc, list, gitLink, extLink}) => {
    
    return(
        <Card className={classes.cardUI}>
            <div className={classes.inner}> 
                <Card.Img variant="top" src={imgSrc} width="50" height="auto"/>
            </div>
           
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{briefDesc}</Card.Text>
                <ListGroup>
                    <ul>
                    {list.map((item, index)=><li key={index}>{item}</li>)}
                    </ul>
                </ListGroup>
                {gitLink? <Card.Link href={gitLink}><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></Card.Link> : <span></span>}
                {extLink? <Card.Link href={extLink}><FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></Card.Link> : <span></span>}
            </Card.Body>
        </Card>
    )
}

export default CardUI