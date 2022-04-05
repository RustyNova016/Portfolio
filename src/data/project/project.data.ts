import {ProjectInterface} from "./project.interface";

let typescriptPill = {
    name: "Typescript",
    color: "#2B7489"
};
export const projectData: ProjectInterface[] = [
    {
        name: "HonkaiLog",
        description: `Une application web créée pour aider à gérer ses ressources dans le jeu vidéo "Honkai Impact 3rd".`,
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
            },
            {
                name: "HTML",
                color: "#e34c26"
            },
            {
                name: "CSS",
                color: "#563d7c"
            }
        ]
    },
    {
        name: "Portefolio",
        description: "Mon portefolio. Pas besoin d'en étaler trop, il est devant vous",
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
        githublink: "https://github.com/RustyNova016/BattleShips",
        description: "Un jeu de bataille navale en python, incorporant plusieurs AI ",
        technologies: [
            {
                name: "Python",
                color: "#3572A5"
            }
        ]
    },
    {
        name: "ModelDB",
        description: "Un site de partage de modèles 3D en ligne",
        technologies: [
            {
                name: "TypeScript",
                color: "#2B7489"
            },
            {
                name: "React",
                color: "#2cb3d5"
            },
            {
                name: "Node.js",
                color: "#51cd51"
            },
            {
                name: "Express",
                color: "#9c6cd3"
            },
            {
                name: "MySQL",
                color: "#c56c49"
            }
        ]
    },
    {
        name: "Mordle",
        description: `Un jeu de "Motus" multilingue en TypeScript`,
        technologies: [
            {
                name: "TypeScript",
                color: "#2B7489"
            },
            {
                name: "React",
                color: "#2cb3d5"
            },
            {
                name: "Node.js",
                color: "#51cd51"
            },
            {
                name: "Express",
                color: "#9c6cd3"
            },
            {
                name: "MongoDB",
                color: "#c56c49"
            }
        ]
    }
]