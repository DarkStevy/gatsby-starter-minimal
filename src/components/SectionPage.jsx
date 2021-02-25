import React from 'react';

export default function SectionPage(props) {
    const {title, id, description, styleTheme} = props

    return (
        <section id={id} style={styleTheme}>
            <h2>{title}</h2>
            {description}
        </section>
    )
}
