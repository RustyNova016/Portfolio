import {Container} from "react-bootstrap";
import {ThreePics} from "./threePics";
import React from "react";
import {ConnaissanceSection, ProjectSection, SectionTitle} from "../App";

export function MainBody() {
    return <Container className={"App"}>


        <ProjectSection/>

        <ConnaissanceSection/>

        <SectionTitle title={"Reseaux Sociaux"}></SectionTitle>
        <ThreePics></ThreePics>
    </Container>;
}