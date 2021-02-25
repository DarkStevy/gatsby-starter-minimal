import React, { useState } from 'react';
import { ThemeDark } from '../../Themes/ThemeDark';
import { ThemeAHeader } from '../../Themes/ThemeHeader';
import { ThemeLight } from '../../Themes/ThemeWhite';

export default function Navigation(props) {
    const {path, title, themeStyle} = props;
    const [test, settest] = useState('');

    function enter() {
       if(themeStyle === ThemeDark) {
            settest('rgb(150, 98, 31)')
       }
       else if(themeStyle === ThemeLight) {
        settest('rgb(223, 154, 64)')
       }
    }

    function leave() {
        settest('')
    }
    

    themeStyle.hover.primary = test;

    return(
        <li>
            <a onMouseEnter={enter} onMouseLeave={leave} style={ThemeAHeader(themeStyle)} href={path}>{title}</a>
        </li>
    )
}