/* Les valeurs du nom, de l'image de profil et du statut connecté (représenté par le rond vert, ou rouge) 
devront provenir du composant parent App.jsx. 
-> Tu trouveras des informations sur les props dans la doc en pièce jointe.
-> Tu trouveras des informations sur l'affichage conditionnel en pièce jointe aussi (qui utilise un opérateur ternaire).
Dans le composant App, appelle plusieurs fois ton composant Contact, avec des valeurs de props différentes, 
afin de tester que tout fonctionne correctement. */

import React  from "react";
import './Contact.css';

const Contact = (props) => {

    return (
        <section className="profilePic">
            <div className="roundedPic">
                <img className="profileImage"
                src={'https://i.ibb.co/' + props.imageId + '.jpg'}
                />
                <div className={`connexionMark ${props.status === 'online' ? 'connected' : 'disconnected'}`}>
                    <p>{props.status}</p>
                </div>
            </div>
            <div className="profileName">
                <h1>{props.name}</h1>
            </div>

        </section>
    );
};

export default Contact;