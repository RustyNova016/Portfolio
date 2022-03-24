import {Featurette, FeaturetteSeparator} from "../components/featurette";
import React from "react";
import {projectData} from "../data/project/project.data";


export function ProgramSection() {
    return <>
        <FeaturetteSeparator></FeaturetteSeparator>
        {projectData.map(value => {
            return <>
                <Featurette title={value.name} description={value.description}
                            githublink={value.githublink}></Featurette>
                <FeaturetteSeparator></FeaturetteSeparator>
            </>
        })}
    </>
}