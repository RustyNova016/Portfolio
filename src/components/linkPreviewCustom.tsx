import {LinkPreview} from "@dhaiwat10/react-link-preview";

export function LinkPreviewCustom(props: { url: string, width: number }) {
    return <LinkPreview url={props.url} backgroundColor={"#2b2b2b"} borderColor={"#555555"}
                        primaryTextColor={"#ffffff"} secondaryTextColor={"#dddddd"} width={props.width}
                        imageHeight={props.width / 2}></LinkPreview>;
}