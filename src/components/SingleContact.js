import React from 'react';


const SingleContact = (props) => {
    return (

        <div className="insider">
            <div className="card">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image"
                                    style={{"height": "40px", "width": "40px"}}>
                                <img src={props.image} alt="Image"></img>
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{props.name}</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
}

export default SingleContact;