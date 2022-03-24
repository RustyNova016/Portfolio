import {Reducer, useEffect, useReducer} from "react";
import {CarouselStateI, CarousselReducerActionI, SlideComponent, slides, slidesReducer} from "../carroussel";
import "./CarrouselStyle.css"

export const initialState: CarouselStateI = {
    slideIndex: 0
};

export function Carousel() {
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

                    {[...slides, ...slides, ...slides].map((slide, i) => {
                        let offset = slides.length + (state.slideIndex - i);
                        return <SlideComponent slide={slide} offset={offset} key={i}/>;
                    })}

                    <button onClick={() => dispatch({type: "PREV"})}>›</button>
                </div>
            </div>
        </>
    );
}