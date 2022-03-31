import {Featurette, FeaturetteSeparator} from "../components/featurette";
import React from "react";
import {projectData} from "../data/project/project.data";


export function ProgramSection() {
    return <>
        {projectData.map(value => {
            return <>
                <FeaturetteSeparator></FeaturetteSeparator>
                <Featurette project={value}></Featurette>
            </>
        })}
    </>
}