import {Reducer, useEffect, useReducer} from "react";
import {SlideComponent, slidesReducer} from "../carroussel";
import "./CarrouselStyle.css"
import {CarouselStateI, CarousselReducerActionI, SlideDataI} from "../../data/carousel/carousel.interfaces";

export const initialState: CarouselStateI = {
    slideIndex: 0
};

export function Carousel3D(props: { data: SlideDataI[] }) {
    const [state, dispatch] = useReducer<Reducer<CarouselStateI, CarousselReducerActionI>>(slidesReducer, initialState);

    useEffect(() => {
        setInterval(args => {
            dispatch({type: "PREV"})
        }, 5000);
    }, []);

    return (
        <>
            <div className={"caroussel-container"}>
                <div className="slides">
                    <button onClick={() => dispatch({type: "NEXT"})}>‹</button>

                    {[...props.data, ...props.data, ...props.data].map((slide, i) => {
                        let offset = props.data.length + (state.slideIndex - i);
                        return <SlideComponent slide={slide} offset={offset} key={i}/>;
                    })}

                    <button onClick={() => dispatch({type: "PREV"})}>›</button>
                </div>
            </div>
        </>
    );
}