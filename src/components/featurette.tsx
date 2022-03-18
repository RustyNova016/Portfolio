import {LinkPreview} from "@dhaiwat10/react-link-preview";

const images = require.context('../../public/images', true);

export function FeaturetteSeparator() {
    return <>
        <hr className="featurette-divider"/>
    </>
}

export interface FeaturettePropsI {
    title: string;
    description: string;
    image?: string;
    githublink?: string;
}

export function FeaturetteHeading(props: { title: string }) {
    return <h2 className="featurette-heading">{props.title}</h2>;
}

function LinkPreviewCustom(props: { url: string, width: number}) {
    return <LinkPreview url={props.url} backgroundColor={"#2b2b2b"} borderColor={"#000000"}
                        primaryTextColor={"#ffffff"} secondaryTextColor={"#dddddd"} width={props.width}
                        imageHeight={props.width/2} ></LinkPreview>;
}

export function Featurette(props: FeaturettePropsI) {
    console.info(props.description)
    return <>
        <div className="row featurette">
            <div className="col-md-7">
                <FeaturetteHeading title={props.title}/>
                <p className="lead">{props.description}</p>
                {props.githublink ?
                    <>
                        <LinkPreviewCustom url={props.githublink} width={500}/>
                    </>
                    : <></>
                }
            </div>
            {props.image ?
                <div className="col-md-5">
                    <img src={images(props.image)}/>
                </div>
                : <></>
            }

        </div>
    </>
}