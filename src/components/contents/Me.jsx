import React from 'react';
import profile from '../../images/profile.jpg'

export default function Me() {
    return (
        <div id="profile">
            <div>
                <figure>
                    <img src={profile} width="60%"  alt="competence logo-html"/>
                </figure>
            </div>
            <div className="card" itemScope itemType="http://schema.org/LocalBusiness">
                <p>Nom :<span itemProp="name">Vergueiro</span></p>
                <p>Prénom :<span itemProp="name">Steven</span></p>
                <p itemProp="address" itemScope itemType="http://schema.org/PostalAddress" />
                <p>Adresse :<span itemProp="address">2 rue Chanoine Bonnard</span></p>
                <p>Code postal :<span itemProp="postalCode">21470</span></p>
                <p>Ville :<span itemProp="addressLocality">Brazey en Plaine</span></p>
                <p>Téléphone :<span itemProp="telephone">07.88.10.46.22</span></p>
                <p>Email :<span itemProp="email">vergueiro.steven@gmail.com</span></p>
            </div>
        </div>
    )
}


/* Dès lors, je mis tout en oeuvre pour percer dans cette voie, tout en prenant du plaisir sur les divers projets développés.

En Mai 2009, je décide de devenir développeur web indépendant après plusieurs postes en tant que développeur web « full-stack » réussis, qui me conforteront dans cette idée afin de toucher un plus large panel de domaines d'activités, voir du pays et conquérir le monde ! */