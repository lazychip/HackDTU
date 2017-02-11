import React from 'react';
import SingleContact from './SingleContact';

class Contact extends React.Component {
    constructor(prop) {
        super(prop);
    }

    render() {
        return (
            <div className="column">
                <div className="level-item has-text-centered">
                    <h1 className="title">Contact</h1>
                </div>

                <div>
                    <SingleContact name="John Legend" image="http://bulma.io/images/placeholders/96x96.png"/>

                </div>

            </div>
        );
    }

}

export default Contact;

