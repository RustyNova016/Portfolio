import {ProjectInterface} from "../data/project/project.interface";
import {TechnologiesInterface} from "../data/technologies/technologies.interface";
import {LinkPreviewCustom} from "./linkPreviewCustom";
import {Col, Row} from "react-bootstrap";

const images = require.context('../../public/images', true);

export function FeaturetteSeparator() {
    return <>
        <hr className="featurette-divider"/>
    </>
}

export interface FeaturettePropsI {
    project: ProjectInterface;
}

export function FeaturetteHeading(props: { title: string }) {
    return <h2 className="featurette-heading">{props.title}</h2>;
}

export function ProjectFeaturette(props: FeaturettePropsI) {
    const project = props.project;
    console.info(project.description)
    return <>
        <div className="row featurette">
            <div className="col-md-7">
                <FeaturetteHeading title={project.name}/>
                <p className="lead">{project.description}</p>


                <div style={{marginBottom: "20px", marginTop: "50px"}}>
                    <Row xs={1} md={5}>
                        {
                            project.technologies?.map(value => {
                                return <>
                                    <Col lg={2}>
                                        <Tag tech={value}></Tag>
                                    </Col>
                                </>
                            })
                        }
                    </Row>

                </div>
            </div>

            <div className="col-md-5">
                {project.githublink ?
                    <>
                        <LinkPreviewCustom url={project.githublink} width={400}/>
                    </>
                    : <></>
                }

                {project.images ?

                    {/*<img src={images(project.images)}/>*/ //TODO: List of images
                    }
                    : <></>
                }
            </div>
        </div>
    </>
}

export function Tag({tech}: { tech: TechnologiesInterface }) {


    return <>
        <span className={"rounded-pill"} style={{borderColor: tech.color}}>
            {tech.name}
        </span>
    </>
}