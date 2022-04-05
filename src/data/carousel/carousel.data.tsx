import {imageGetter} from "../../tools/imageGetter";
import {SlideDataI} from "./carousel.interfaces";

export const languagesSlides: SlideDataI[] = [
    {
        title: "PHP",
        subtitle: "",
        description: "",
        image: imageGetter("logos/php.png")
    },
    {
        title: "TypeScript",
        subtitle: "",
        description: "Avec Javascript",
        image: imageGetter("logos/typescript.png")
    },
    {
        title: "Python",
        subtitle: "",
        description: "",
        image: imageGetter("logos/python.png")
    },
    {
        title: "C#",
        subtitle: "",
        description: "",
        image: imageGetter("logos/csharp.png")
    },
    {
        title: "Java",
        subtitle: "",
        image: imageGetter("logos/java.png"),
        description: ""
    }
];

export const CMSSlides: SlideDataI[] = [
    {
        title: "WordPress",
        image: imageGetter("logos/wordpress.png"),
    },
    {
        title: "Symfony",
        image: imageGetter("logos/symfony.png"),
    },
    /*{
        title: "Prestashop",
        image: imageGetter("logos/csharp.png"),
    }*/
]

export const FrameworkSlides: SlideDataI[] = [
    {
        title: "Bootstrap",
        image: imageGetter("logos/bootstrap.png"),
    },
    {
        title: "React",
        image: imageGetter("logos/React.jpg"),
    },
]

export const serverSlide: SlideDataI[] = [
    {
        title: "Apache",
        image: imageGetter("logos/Apache.png"),
    },
    {
        title: "Express",
        image: imageGetter("logos/express.png"),
    },
]

export const bddSlides: SlideDataI[] = [
    {
        title: "MySQL 8",
        image: imageGetter("logos/mysql.png"),
    },
    {
        title: "MongoDB",
        image: imageGetter("logos/mongo.png"),
    },
]

export const autreSlides: SlideDataI[] = [
    {
        title: "Github Copilot",
        image: imageGetter("logos/copi.png"),
    }
]