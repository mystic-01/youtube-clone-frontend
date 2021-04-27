import React from 'react';

import './VideoRow.css';

const VideoRow = ({image, title, channel, views, subs, timeStamp, description}) => {
    return (
        <div className="videoRow">
            <img className="videoRow__" src={image} alt={channel} />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">{channel} | 
                <span className="videoRow__subs">
                    <span className="videoRow__subsNumber">{subs}</span> Subscribers 
                </span>  
                | {views} views | {timeStamp}</p>
                <p className="videoRow__description">{description}</p>
            </div>
        </div>
    )
};

export default VideoRow;
