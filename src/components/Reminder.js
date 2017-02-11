import React from 'react';
import SingleReminder from './SingleReminder';

class Reminder extends React.Component {
    constructor(prop) {
        super(prop);
    }


    render() {
        return (
            <div className="column">
                <div className="level-item has-text-centered">
                    <h1 className="title">Reminder</h1>
                </div>
                <div>
                    <SingleReminder text="I have to take the green colored medicines today."/>
                </div>

            </div>
        );
    }

}

export default Reminder;