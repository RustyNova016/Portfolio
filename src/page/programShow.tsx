import {Featurette, FeaturetteSeparator} from "../components/featurette";
import React from "react";

export function ProgramShow() {
    return <>
        <Featurette title={"test"} description={"lorem ipsum"}
                    image={""}></Featurette>
        <FeaturetteSeparator></FeaturetteSeparator>
        <Featurette title={"test"} githublink={"https://github.com/RustyNova016/Nova-Discord-bot-framework"} description={"\n" +
            "\n\n" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum ex eget diam faucibus, vel facilisis lacus mollis. In lobortis imperdiet arcu, sed vehicula nunc pretium at. Morbi a elit massa. Phasellus ut sem massa. Nulla laoreet mattis arcu. Suspendisse maximus tincidunt varius. Fusce in nisi a est porttitor fermentum. Morbi finibus sodales tristique. In efficitur rhoncus cursus. Pellentesque ullamcorper convallis pharetra. Aliquam eget tortor imperdiet velit feugiat tempor non eu dui. Morbi ex metus, congue eget accumsan vitae, dignissim sed nisl. Nam a justo vulputate, accumsan eros nec, convallis lorem. Curabitur volutpat dui dictum sem auctor vestibulum. Quisque sit amet libero felis.\n" +
            "\n\n" +
            "Suspendisse porttitor magna eu mi dictum fermentum. Integer aliquet cursus odio fringilla pharetra. Cras placerat nibh ac ornare vulputate. Fusce eu dolor enim. Pellentesque id luctus massa. Quisque varius ut odio vel efficitur. Nam ultricies ornare tortor. Sed tincidunt tellus non luctus condimentum.\n" +
            "\n\n" +
            "Cras euismod ipsum enim. Praesent ornare non magna ullamcorper ultrices. Donec elementum dignissim neque, malesuada porttitor enim posuere ut. Morbi ac sem in ipsum ultricies consectetur eu eget orci. Vestibulum nec odio id sapien consequat iaculis vitae id lorem. Integer non lorem diam. Curabitur imperdiet mollis tellus sed varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sagittis justo vitae eros eleifend viverra. Aenean pellentesque viverra magna, at blandit purus auctor id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque non finibus ex. Quisque interdum neque faucibus lacus iaculis, at tincidunt mi euismod. Nullam tincidunt sagittis accumsan. Phasellus aliquet dictum enim commodo consequat. Ut varius laoreet tristique.\n" +
            "\n\n" +
            "Nunc pretium, massa non tincidunt ultrices, sapien dui auctor arcu, vitae porta magna ante vel orci. Proin porta venenatis venenatis. Mauris eu tempus est. Cras sed ante ut ipsum dignissim tincidunt vel in augue. Phasellus nec enim et mi tincidunt finibus. Proin eget maximus leo, at volutpat diam. Sed malesuada turpis elit, et tincidunt dolor fringilla euismod.\n" +
            "\n\n" +
            "In feugiat urna nisi, et sodales eros elementum non. Pellentesque eget dignissim massa. Nam facilisis eget leo nec laoreet. Curabitur consequat sem mauris, a ultrices purus aliquam eget. Mauris purus orci, consectetur vitae blandit eu, pulvinar in diam. Phasellus condimentum, lectus in tincidunt tristique, ipsum nisi facilisis nulla, sed vehicula magna ipsum in nunc. Sed egestas neque mattis, dictum sem ac, luctus nunc. Curabitur sit amet neque molestie, malesuada nulla at, viverra risus. Sed hendrerit porttitor nulla tempor aliquam. Mauris nec neque hendrerit, mollis leo in, ornare ante. "}
                    image={"./fetchimage.png"}></Featurette>
        <FeaturetteSeparator></FeaturetteSeparator>
    </>
}