import {Card, Col} from "react-bootstrap";
import React from "react";
import {imageGetter} from "../tools/imageGetter";

interface LanguageCardI {
    title: string;
    description?: string;
    image: string;
}

export function LanguageCard(props: LanguageCardI) {

    return <Col>
        <Card className={"language-card"}>
            <div className={"body-card"}>
                <Card.Img
                          className={"LC-image"}
                          src={props.image ?
                              props.image
                              :
                              imageGetter("logos/" + props.title.toLocaleLowerCase() + ".png")}/>

                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description} {"‎ \n"}
                    </Card.Text>
                </Card.Body>
            </div>
        </Card>
    </Col>;
}