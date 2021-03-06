import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function customCard(props) {


    //logic is simple: if there exists a link, we render the card with the link
    //otherwise we render the one without it
    if (props.link) {
        return (
            <Card className='card-parent'>
                <CardImg top width="100%" src={props.image} alt="Card image cap" />
                <CardBody className='card-body'>
                    <CardTitle>{props.cardTitle}</CardTitle>
                    <CardText> {props.cardText}</CardText>


                    <div className="linksInProjects">
                        <a href={props.link} rel="noopener noreferrer" target="_blank">
                            <span class="fa fa-link" area-hidden="true" ></span>
                        </a>


                        <a href={props.github} rel="noopener noreferrer" target="_blank">
                            <span class="fab fa-github" area-hidden="true"></span>
                        </a>
                    </div>

                </CardBody>
            </Card >
        )
    } else {
        return (
            <Card className='card-parent'>
                <CardImg top width="100%" src={props.image} alt="Card image cap" />
                <CardBody className='card-body'>
                    <CardTitle>{props.cardTitle}</CardTitle>
                    <CardText> {props.cardText}</CardText>


                    <div className="linksInProjects">
                        <a href={props.github} rel="noopener noreferrer" target="_blank">
                            <span class="fab fa-github" area-hidden="true"></span>
                        </a>
                    </div>

                </CardBody>
            </Card >
        )

    }


}

export default customCard;