import React from 'react';

const SingleReminder  = (props) => {
    return (
        <div className="notification insider">
            {props.text}
            <button className="delete"></button>
        </div>
    );
}

export default SingleReminder;