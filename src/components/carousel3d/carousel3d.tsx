import {Reducer, useEffect, useReducer} from "react";
import {SlideComponent, slidesReducer} from "../carroussel";
import "./CarrouselStyle.css"
import {CarouselStateI, CarousselReducerActionI, SlideDataI} from "../../data/carousel/carousel.interfaces";

export const initialState: CarouselStateI = {
    slideIndex: 0,
    slides: []
};

export function Carousel3D(props: { data: SlideDataI[] }) {
    initialState.slides = props.data;
    console.log(initialState);
    const [state, dispatch] = useReducer<Reducer<CarouselStateI, CarousselReducerActionI>>(slidesReducer, initialState);

    useEffect(() => {
        setInterval(args => {
            dispatch({type: "PREV"})
        }, 5000);
    }, []);

    console.log(props.data[0].title);
    console.log(props.data.length);

    return (
        <>
            <div className={"caroussel-container"}>
                <div className="slides">
                    <button onClick={() => dispatch({type: "NEXT"})}>‹</button>

                    {[...props.data, ...props.data, ...props.data].map(
                        (slideData, i) => {
                            // Have an array length first
                            let offset = props.data.length;
                            // then decrement for each slide
                            offset += (state.slideIndex - i);
                            // then add the component
                            return <SlideComponent slide={slideData} offset={offset} slideid={i}/>;
                        }
                    )}

                    <button onClick={() => dispatch({type: "PREV"})}>›</button>
                </div>
            </div>
        </>
    );
}