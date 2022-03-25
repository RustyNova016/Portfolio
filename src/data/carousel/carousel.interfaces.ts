export interface SlideDataI {
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

export interface SlideComponentPropsI {
    slide: SlideDataI;
    offset: number;
}