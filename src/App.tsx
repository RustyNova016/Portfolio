import React from 'react';
import './assets/App.css';
import {Accordion, CardGroup, Carousel, Col, Row} from "react-bootstrap";
import {ProgramSection} from "./page/programSection";
import "./assets/carousel.css"
import "./assets/AppCSS.css"
import {LanguageCard} from "./components/LanguageCard";
import {
    autreSlides,
    bddSlides,
    CMSSlides,
    FrameworkSlides,
    languagesSlides,
    serverSlide
} from "./data/carousel/carousel.data";
import {MainBody} from "./components/MainBody";
import exp from "constants";
import {SlideDataI} from "./data/carousel/carousel.interfaces";


export interface SectionTitleI {
    title: string;
}

export function SectionTitle(props: SectionTitleI) {
    return <div className={"section-title"}>
        <h1>{props.title}</h1>
    </div>;
}

/*function CompetenceSection() {
    return <>
        <SectionTitle title={"Languages aquis"}/>

        <FeaturetteHeading title={"Langueges"}></FeaturetteHeading>
        <Row className={"language-card-overflow"}>
            <LanguageCard title={"Php"} text={"desc"}/>
            <LanguageCard title={"JavaScript"} text={"desc"}/>
            <LanguageCard title={"Typescript"} text={"desc"}/>
            <LanguageCard title={"Python"} text={"desc"}/>
            <LanguageCard title={"C#"} text={"desc"} image={"logos/csharp.png"}/>
            <LanguageCard title={"Java"} text={"desc"} image={"logos/csharp.png"}/>
        </Row>
    </>;
}*/

export function Footer() {
    return <footer className="footer text-center" style={{padding: "5px"}}>
        <div className="container">

            <div className="row" style={{marginTop: "10px"}}>
                <div className="col-6">
                    <a className="footer" href="https://honkaiimpact3.mihoyo.com/global/en-us/home"></a>
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

export function ProjectSection() {
    return <>
        <SectionTitle title={"Projets"}/>
        <a href={"#projets"}></a>
        <ProgramSection></ProgramSection>
    </>;
}

export function ConnaissanceSection() {
    return <>
        <SectionTitle title={"Connaissances"}/>

        {/*<LanguageCard title={languagesSlides[0].title} text={languagesSlides[0].description} image={languagesSlides[0].image}/>*/}
        {/*<Row>
            {
                languagesSlides.map((slide, index) => {
                    return <Col><LanguageCard title={slide.title} description={slide.description} image={slide.image}/></Col>
                })
            }
        </Row>*/}


        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    Languages
                </Accordion.Header>
                <Accordion.Body>
                    <LangCar slides={languagesSlides}></LangCar>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>
                    CMS
                </Accordion.Header>
                <Accordion.Body>
                    <LangCar slides={CMSSlides}></LangCar>
                </Accordion.Body>

            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>
                    Frameworks
                </Accordion.Header>
                <Accordion.Body>
                    <LangCar slides={FrameworkSlides}></LangCar>
                </Accordion.Body>

            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>
                    Servers
                </Accordion.Header>
                <Accordion.Body>
                    <LangCar slides={serverSlide}></LangCar>
                </Accordion.Body>

            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>
                    BDD
                </Accordion.Header>
                <Accordion.Body>
                    <LangCar slides={bddSlides}></LangCar>
                </Accordion.Body>

            </Accordion.Item>

            <Accordion.Item eventKey="5">
                <Accordion.Header>
                    Autres
                </Accordion.Header>
                <Accordion.Body>
                    <LangCar slides={autreSlides}></LangCar>
                </Accordion.Body>

            </Accordion.Item>

        </Accordion>
        <a href={"#languages"}></a>
        {/*<CompetenceSection/>*/}
    </>;
}

export function LangCar(props: { slides: SlideDataI[] }) {
    return (<>
        <Row xs={1} md={4} className="g-4">
            {
                props.slides.map((slide, index) => {
                    return <Col><LanguageCard title={slide.title} description={slide.description} image={slide.image}/></Col>
                })
            }</Row>
    </>

    )
}

export function Header() {
    return <div className={""}>
        <h1 className={"main-title"}>Portfolio<br></br> ⬇</h1>
        <br></br>
    </div>;
}

export function App() {
    return (
        <div className={"App parallax"}>
            <div className={"background-shading"}>
                <Header/>
                <MainBody/>
            </div>
            {/*<AppHeader></AppHeader>*/}
            {/*<HeaderCarrousel></HeaderCarrousel>*/}
        </div>
    )
}

export default App;
