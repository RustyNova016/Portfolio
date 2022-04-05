import {ProjectFeaturette, FeaturetteSeparator} from "../components/projectFeaturette";
import React from "react";
import {projectData} from "../data/project/project.data";


export function ProgramSection() {
    return <>
        {projectData.map(value => {
            return <>
                <FeaturetteSeparator></FeaturetteSeparator>
                <ProjectFeaturette project={value}></ProjectFeaturette>
            </>
        })}
    </>
}