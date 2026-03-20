import { useEffect } from "react";
import useContent from "../../store/useContent.js";

export default function Result() {
    const { content } = useContent();
    useEffect(() => {
        return()=>{
                console.log("Cleaning up content");
        }
    }, [content]);
}