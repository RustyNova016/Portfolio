import {ProjectInterface} from "./project.interface";

let typescriptPill = {
    name: "Typescript",
    color: "#2B7489"
};
export const projectData: ProjectInterface[] = [
    {
        name: "HonkaiLog",
        description: `Une application web créée pour aider a gérer ses resources dans le jeu video "Honkai Impact 3rd".`,
        githublink: "https://github.com/RustyNova016/HonkaiLog",
        technologies: [
            {
                name: "PHP",
                color: "#4F5D95"
            },
            typescriptPill,
            {
                name: "SQL",
                color: "#c56c49"
            }
        ]
    },
    {
        name: "Portefolio",
        description: "Mon portefolio. Pas besoin d'en etaler trop, il devant vous",
        githublink: "https://github.com/RustyNova016/portfolio",
        technologies: [
            {
                name: "React",
                color: "#2cb3d5"
            },
            typescriptPill,
            {
                name: "SASS",
                color: "#C6538C"
            },
            {
                name: "Node.js",
                color: "#51cd51"
            }
        ]
    },
    {
        name: "Battleships",
        githublink: "https://github.com/RustyNova016/BattleShips"
    }
]