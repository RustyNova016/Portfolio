import React from 'react';
import './assets/App.css';
import AppHeader from "./components/header";
import {HeaderCarrousel} from "./components/headerCarrousel";
import {Container, Row} from "react-bootstrap";
import {ThreePics} from "./components/threePics";
import {ProgramSection} from "./page/programSection";
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

function Footer() {
    return <footer className="footer text-center" style={{padding: "5px"}}>
        <div className="container">

            <div className="row" style={{marginTop: "10px"}}>
                <div className="col-6">
                    <a className="footer" href="https://honkaiimpact3.mihoyo.com/global/en-us/home">
                        <img className="footer-image img-fluid" style={{maxHeight: "100px !important;"}}
                             src="/honkailog/img/Honkai.png"/>
                    </a>
                </div>


                <div className="bg col-6">
                    <h3>Links</h3>
                    <p>
                        <i className="bi bi-github"></i> Github page:
                        <a href="https://github.com/VelionaVollerei/HonkaiLog">VelionaVollerei/HonkaiLog</a>
                    </p>
                    <p>
                        <i className="fas fa-laptop"></i>
                        <a href="https://honkaiimpact3.mihoyo.com/global/en-us/home">Honkai Impact official
                            site</a>
                    </p>
                </div>
            </div>
        </div>

        <div className="footer-bottom text-center">
            <p style={{color: "#FFFFFF"}}> HonkaiLog © 2021 |
                Graphical assets used are owned by
                <a href="https://honkaiimpact3.mihoyo.com/">
                    miHoYo
                </a>
                and
                <a href="https://www.pixiv.net/en/users/38516621">
                    RustyNova
                </a>
            </p>
        </div>
    </footer>;
}

function App() {
    return (
        <div className={"App"}>
            <AppHeader></AppHeader>
            {/*<HeaderCarrousel></HeaderCarrousel>*/}
            <Container>
                <SectionTitle title={"Projets"}/>
                <a href={"#projets"}></a>
                <ProgramSection></ProgramSection>

                <Carousel></Carousel>

                <a href={"#languages"}></a>
                <CompetenceSection/>

                <SectionTitle title={"Reseaux Sociaux"}></SectionTitle>
                <ThreePics></ThreePics>
            </Container>
            <Footer/>
        </div>
    )

}

export default App;
