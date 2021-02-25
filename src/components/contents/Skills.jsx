import React from 'react';
import html from "../../images/html.png";
import css from "../../images/css.png";
import gatsby from "../../images/gatsby.png";
import illustrator from "../../images/illustrator.png";
import js from "../../images/js.png";
import mysql from "../../images/mysql.png";
import photoshop from "../../images/photoshop.png";
import php from "../../images/php.png";
import react from "../../images/react.png";
import sass from "../../images/sass.png";
import symfony from "../../images/symfony.png";
import bootstrap from "../../images/bootstrap.png";

export default function skills() {
    return (
        <div id="competences">
            <figure>
                <img src={html}  alt="competence logo-html"/>
            </figure>
            <figure>
                <img src={css}  alt="competence logo-css"/>
            </figure>
            <figure>
                <img src={js}  alt="competence logo-js"/>
            </figure>
            <figure>
                <img src={bootstrap}  alt="competence logo-bootstrap"/>
            </figure>
            <figure>
                <img src={sass}  alt="competence logo-sass"/>
            </figure>
            <figure>
                <img src={php}  alt="competence logo-php"/>
            </figure>
            <figure>
                <img src={mysql}  alt="competence logo-mysql"/>
            </figure>
            <figure>
                <img src={symfony}  alt="competence logo-symfony"/>
            </figure>
            <figure>
                <img src={react}  alt="competence logo-react"/>
            </figure>
            <figure>
                <img src={gatsby}  alt="competence logo-gatsby"/>
            </figure>
            <figure>
                <img src={photoshop}  alt="competence logo-photoshop"/>
            </figure>
            <figure>
                <img src={illustrator}  alt="competence logo-illustrator"/>
            </figure>
        </div>
    )
}