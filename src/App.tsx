import React from 'react';
import './assets/App.css';
import AppHeader from "./components/header";
import {HeaderCarrousel} from "./components/headerCarrousel";
import {Container, Row} from "react-bootstrap";
import {ThreePics} from "./components/threePics";
import {ProgramShow} from "./page/programShow";
import "./assets/carousel.css"
import "./assets/AppCSS.css"
import {FeaturetteHeading} from "./components/featurette";
import {LanguageCard} from "./components/LanguageCard";
import {Carousel} from "./components/carousel3d/carousel3d";


export interface SectionTitleI {
    title: string;
}

function SectionTitle(props: SectionTitleI) {
    return <div className={"section-title"}>
        <h1>{props.title}</h1>
    </div>;
}

function CompetenceSection() {
    return <>
        <SectionTitle title={"Languages aquis"}/>

        <FeaturetteHeading title={"Langueges"}></FeaturetteHeading>
        <Row className={"language-card-overflow"}>
            <LanguageCard title={"Php"} text={"desc"}/>
            <LanguageCard title={"JavaScript"} text={"desc"}/>
            <LanguageCard title={"Typescript"} text={"desc"}/>
            <LanguageCard title={"Python"} text={"desc"}/>
            <LanguageCard title={"C#"} text={"desc"} image={"logos/csharp.png"}/>
        </Row>
    </>;
}

function App() {
    return (
        <div className={"App"}>
            <AppHeader></AppHeader>
            {/*<HeaderCarrousel></HeaderCarrousel>*/}
            <Container>
                <SectionTitle title={"Projets"}/>
                <a href={"#projets"}></a>
                <ProgramShow></ProgramShow>

                <Carousel></Carousel>

                <a href={"#languages"}></a>
                <CompetenceSection/>

                <SectionTitle title={"Reseaux Sociaux"}></SectionTitle>
                <ThreePics></ThreePics>
            </Container>
        </div>
    )

}

export default App;
