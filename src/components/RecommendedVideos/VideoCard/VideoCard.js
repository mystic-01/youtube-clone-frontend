import React from 'react';
import Avatar  from '@material-ui/core/Avatar';

import './VideoCard.css';

const VideoCard = ({image, title, channel, views, timeStamp, channelImage}) => {
    return (
        <div className="videoCard">
            <img className="videoCard__thumbnail" src={image} alt="thumbnail" />
            <div className="videoCard__info">
                <Avatar className="videoCard__avatar" src={channelImage} alt={channel} />
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} | {timeStamp}</p>
                </div>
            </div>
        </div>
    )
};

export default VideoCard;
