import React from 'react';
import moment from 'moment';

import BigCalendar from 'react-big-calendar';
// a localizer for BigCalendar
BigCalendar.momentLocalizer(moment);

import 'react-big-calendar/lib/css/react-big-calendar.css';


class Calender extends React.Component {
    constructor(prop) {
        super(prop);
    }


    render() {

        const clocks = [
            { id: 'clock1', town: 'New York', timezone: 'America/New_York' }
        ];



        return (
            <div className="column">
                <div className="level-item has-text-centered">
                    <h1 className="title">Calender</h1>
                </div>

                <div className="calendar-box">
                    <div className="insider">
                        <BigCalendar
                            style={{height: '420px'}}
                            events={[]}
                        />
                    </div>
                </div>
            </div>
        );
    }

}
export default Calender;