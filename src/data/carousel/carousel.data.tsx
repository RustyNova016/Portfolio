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
        image: imageGetter("logos/csharp.png"),
        description: ""
    }
];