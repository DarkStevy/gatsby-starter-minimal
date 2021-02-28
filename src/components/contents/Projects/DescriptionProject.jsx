import React, { useEffect, useState } from 'react';

export default function DescriptionProject(props) {
    const {action, click} = props;
    const [description, setDescription] = useState("closeDescriptionProject");
    
    useEffect(() => {
        if(action === "closeOverlayDescriptionProject") {
            setDescription("closeDescriptionProject");
            document.body.style.overflow = "visible";
        }
        else if(action === "openOverlayDescriptionProject") {
            setDescription("openDescriptionProject");
            document.body.style.overflow = "hidden";
        }
    },[action])
    

    return (
        <>
            <div onClick={click} id={action}>{/* Overlay */}</div>

            <div id={description}>

            </div>
        </>
    )
}