import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import { ThemeDark } from '../Themes/ThemeDark';
import { ThemeLight } from '../Themes/ThemeWhite';
import '../styles/style.scss';
import { ThemeContext } from '../context/ThemeContext';


const IndexPage = () => {
    const [theme, setTheme] = useState(ThemeDark);
    const [ThemeArray, setThemeArray] = useState({
        'name' : "light",
        'styleTheme' : theme
    });

    useEffect(() => {
        if(theme === ThemeLight) {
            setThemeArray({
                'name' : "light",
                'styleTheme' : theme
            })
        }
        else if(theme === ThemeDark) {
            setThemeArray({
                'name' : "dark",
                'styleTheme' : theme
            })
        }
    }, [theme])

    function changeTheme() {
        if(theme === ThemeLight) {
            setTheme(ThemeDark)
        }
        else if(theme === ThemeDark) {
            setTheme(ThemeLight)
        }
    }

    return (
        <ThemeContext.Provider value={ThemeArray}>
            <>
                <Header changeTheme={changeTheme} />
                <Main/>
            </>  
        </ThemeContext.Provider>
    )
}

export default IndexPage
