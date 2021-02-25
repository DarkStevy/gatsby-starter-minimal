/* import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import { themeDark } from '../Themes/ThemeDark';
import { ThemeWhite } from '../Themes/ThemeWhite';
import '../styles/themeDark.scss';

const IndexPage = () => {
  const [theme, setTheme] = useState(ThemeWhite)
  const [nameTheme, setNameTheme] = useState("Light")

  useEffect(() => {
    if (theme === ThemeWhite) {
        setNameTheme("Dark"); 
    }
    else if(theme === themeDark){
      setNameTheme("Light");
    }
  }, [theme]);


    function changeTheme() {
        if(theme === ThemeWhite) {
            setTheme(themeDark)
        }
        else if(theme === themeDark) {
            setTheme(ThemeWhite)
        }
    }

    const pageStyles = {
        backgroundColor: theme.background,
        color: theme.color,
    }

    return (
        <div className="dark" style={pageStyles}>
            <Header 
            theme={changeTheme}
            buttonName={nameTheme}
            />
            <Main />
        </div>
    )
} */