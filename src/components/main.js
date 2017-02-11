import React from 'react';
import Contact from './Contact';
import Reminder from './Reminder';
import Calender from './Calendar';


class Main extends React.Component {
    constructor(prop) {
        super(prop);
    }

    render() {
        return (
            <div>
                <div className="columns">
                    <Contact/>
                    <Reminder/>
                    <Calender/>

                </div>
            </div>
        );
    }

}
export default Main;