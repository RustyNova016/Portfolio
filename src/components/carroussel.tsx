import {CSSProperties} from "react";
import {imageGetter} from "../tools/imageGetter";

console.clear();

interface SlideDataI {
    title: string;
    subtitle: string;
    description: string;
    image: string;
}

export interface CarouselStateI {
    slideIndex: number;
}

export interface CarousselReducerActionI {
    type: string;
}

export const slides: SlideDataI[] = [
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
    }
];

/*function useTilt(active: boolean | null) {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current || !active) {
            return;
        }

        const state = {
            rect: undefined,
            mouseX: undefined,
            mouseY: undefined
        };

        let el = ref.current;

        const handleMouseMove = (e: { clientX: undefined; clientY: undefined; }) => {
            if (!el) {
                return;
            }
            if (!state.rect) {
                state.rect = el.getBoundingClientRect();
            }
            state.mouseX = e.clientX;
            state.mouseY = e.clientY;
            const px = (state.mouseX - state.rect.left) / state.rect.width;
            const py = (state.mouseY - state.rect.top) / state.rect.height;

            el.style.setProperty("--px", px);
            el.style.setProperty("--py", py);
        };

        el.addEventListener("mousemove", handleMouseMove);

        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
        };
    }, [active]);

    return ref;
}*/


/** Handle state change on button click
 *
 * @param state
 * @param action
 */
export function slidesReducer(state: CarouselStateI, action: CarousselReducerActionI): CarouselStateI {
    if (action.type === "NEXT") {
        return {
            ...state,
            slideIndex:
                (state.slideIndex + 1) % slides.length
        };
    } else if (action.type === "PREV") {
        return {
            ...state,
            slideIndex:
                state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
        };
    } else {
        return state;
    }
}

interface SlideComponentPropsI {
    slide: SlideDataI;
    offset: number;
}


export function SlideComponent(props: SlideComponentPropsI) {
    const {slide, offset} = props

    const active = offset === 0 ? true : null;
    //const ref = useTilt(active);

    let style = {
        "--offset": offset.toString(),
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
    } as CSSProperties;

    return (
        <div
            //ref={ref}
            className="slide"
            data-active={active}
            style={style}
        >
            <div
                className="slideBackground"
                style={{
                    //backgroundImage: `url('${slide.image}')`
                }}
            />
            <div
                className="slideContent"
                style={{
                    backgroundImage: `url('${slide.image}')`
                }}
            >
                <div className="slideContentInner">
                    <h2 className="slideTitle">{slide.title}</h2>
                    <h3 className="slideSubtitle">{slide.subtitle}</h3>
                    <p className="slideDescription">{slide.description}</p>
                </div>
            </div>
        </div>
    );
}

