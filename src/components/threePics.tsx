import {Col, Row} from "react-bootstrap";

export interface ImagettePropsI {
    name: string;
    desc: string;
    link: string
}

function Imagette(props: ImagettePropsI) {
    return <>
        <Col>
            <div className="imagette">
{/*                <svg className="bd-placeholder-img rounded-circle" width="140" height="140"
                     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
                     preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#777"></rect>
                    <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                </svg>*/}

                <h2>{props.name}</h2>
                <p>{props.desc}</p>
                <p><a className="btn btn-secondary" href={props.link}>View details »</a></p>
            </div>
        </Col>
    </>
}

export function ThreePics() {
    return <>
        <Row>
            <Col>
                <Imagette name={"Twitter"} desc={"Lien vers mon profile twitter"} link={"https://twitter.com/rustynova016"}/>
            </Col>

            <Col>
                <Imagette name={"GitHub"} desc={"Lien vers mon profile GitHub"} link={"https://github.com/RustyNova016"}/>
            </Col>

        </Row>
    </>
}