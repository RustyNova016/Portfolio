import {TechnologiesInterface} from "../technologies/technologies.interface";

export interface ProjectInterface {
    name: string;
    description?: string;
    githublink?: string;
    images?: string[];
    technologies?: TechnologiesInterface[]
}