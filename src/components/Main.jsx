import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { ThemeFormation, ThemeMe, ThemeProject, ThemeSkill, ThemeNetwork } from '../Themes/ThemeMain';
import Formations from './contents/Formations';
import Me from './contents/Me';
import Networks from './contents/Networks';
import Projects from './contents/Projects';
import skills from './contents/Skills';
import SectionPage from './SectionPage';

export default function Main() {

    const theme = useContext(ThemeContext);
    const [test, setTest] = useState();
    const {styleTheme} = theme

    function scrolled(){
        let essaie = document.querySelector("#projets");
        let windowHeight = document.body.clientHeight,
            currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let add = essaie.offsetHeight * 2;
        (currentScroll >= windowHeight - add) ?
        setTest('fixed') : 
        setTest('');
    }

    useEffect(() => {
        if(window){
            window.addEventListener("scroll", scrolled, false);
        }
    }, []);

    return (
        <main>
            <SectionPage
                id="me"
                title="Qui suis-je ?"
                description={Me()}
                styleTheme={ThemeMe(styleTheme)}
            />
            <SectionPage
                id="formations"
                title="Mon Parcours"
                description={Formations()}
                styleTheme={ThemeFormation(styleTheme)}
            />
            <SectionPage
                id="skills"
                title="Mes Compétences"
                description={skills()}
                styleTheme={ThemeSkill(styleTheme)}
            />
            <div id={test}></div>
            <SectionPage
                id="projets"
                title="Mes Projets"
                description={Projects()}
                styleTheme={ThemeProject(styleTheme)}
            />
            <SectionPage
                id="networks"
                title="Mes Réseaux"
                description={Networks()}
                styleTheme={ThemeNetwork(styleTheme)}
            />
        </main>
    )
}