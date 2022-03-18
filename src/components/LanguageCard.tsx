import {Card, Col} from "react-bootstrap";
import React from "react";
import {imageGetter} from "../tools/imageGetter";

interface LanguageCardI {
    title: string;
    text: string;
    image?: string;
}

export function LanguageCard(props: LanguageCardI) {

    return <Col>
        <Card className={"language-card"}>
            <div className={"body-card"}>
                <Card.Img variant="top"
                          src={props.image ?
                              imageGetter(props.image)
                              :
                              imageGetter("logos/" + props.title.toLocaleLowerCase() + ".png")}/>

                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                </Card.Body>
            </div>
        </Card>
    </Col>;
}