import {Featurette, FeaturetteSeparator} from "../components/featurette";
import React from "react";
import {projectData} from "../data/project/project.data";


export function ProgramSection() {
    return <>
        <FeaturetteSeparator></FeaturetteSeparator>
        {projectData.map(value => {
            return <>
                <Featurette project={value}></Featurette>
                <FeaturetteSeparator></FeaturetteSeparator>
            </>
        })}
    </>
}