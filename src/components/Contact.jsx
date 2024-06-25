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