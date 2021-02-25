import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { ThemeImgHeader, ThemeNavHeader, ThemeHeader } from '../Themes/ThemeHeader';
import Navigation from './contents/Navigation';

export default function Header(props){
    const {changeTheme} = props;

    const theme = useContext(ThemeContext);
    const {styleTheme, name} = theme
    
    return (
        <header style={ThemeHeader(theme)} id="home">
            <div id="nav-header" style={ThemeNavHeader(styleTheme)}>
                <button onClick={changeTheme}>{name}</button>
                <nav>
                    <ul>
                        <Navigation 
                            title="Accueil"
                            path="#home"
                            themeStyle={styleTheme}
                        />
                        <Navigation 
                            title="Qui suis-je ?"
                            path="#me"
                            themeStyle={styleTheme}
                        />
                        <Navigation 
                            title="Mon parcours"
                            path="#formations"
                            themeStyle={styleTheme}
                        />
                        <Navigation 
                            title="Mes Compétences"
                            path="#skills"
                            themeStyle={styleTheme}
                        />
                        <Navigation 
                            title="Mes Projets"
                            path="#projets"
                            themeStyle={styleTheme}
                        />
                        <Navigation 
                            title="Mes réseaux"
                            path="#networks"
                            themeStyle={styleTheme}
                        />
                    </ul>
                </nav>
            </div>

            <div id="img-header" style={ThemeImgHeader(styleTheme)} className={name}>
                <div id="filtre"></div>
                <div>
                    <h1>Vergueiro Steven</h1>
                    <h2>Développeur web Full stack</h2>
                    <span>ReactJS - (Angular/symfony)</span>
                </div>
            </div>
        </header>
    )
}