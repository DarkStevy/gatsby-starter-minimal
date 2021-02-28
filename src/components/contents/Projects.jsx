import React, {useState} from 'react';
import simrace from '../../images/essaie.png';
import plus from '../../images/plus.png';
import DescriptionProject from './Projects/DescriptionProject';

export default function Projects() {

    const [description, setDescription] = useState("closeOverlayDescriptionProject");

    function changeDescription(event) {

        if(description === "closeOverlayDescriptionProject"){
            setDescription("openOverlayDescriptionProject")
        }
        else if(description === "openOverlayDescriptionProject") {
            setDescription("closeOverlayDescriptionProject")
        }
    }
    
    console.log(description);
    return (
        <>
            <div id="project">
                <div>
                    <figure>
                        <img src={simrace} alt="simracesetup.fr" />
                    </figure>
                    <div>
                        <a onClick={changeDescription} href="#projets"><img src={plus} alt="plus"/></a>
                    </div>
                </div>
            </div>
            <DescriptionProject action={description} click={changeDescription}/>
        </>
    )
}