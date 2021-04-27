import React from 'react';

import './Sidebar.css';

import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideo from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

import SidebarRow from './SidebarRow/SidebarRow';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow selected title="Home" Icon={HomeIcon} />
            <SidebarRow title="Trending" Icon={WhatshotIcon} />
            <SidebarRow title="Subscription" Icon={SubscriptionsIcon} />
            <hr />
            <SidebarRow title="Library" Icon={VideoLibraryIcon} />
            <SidebarRow title="History" Icon={HistoryIcon} />
            <SidebarRow title="Your videos" Icon={OndemandVideo} />
            <SidebarRow title="Watch Later" Icon={WatchLaterIcon} />
            <SidebarRow title="Liked videos" Icon={ThumbUpAltOutlinedIcon} />
            <SidebarRow title="Show more" Icon={ExpandMoreOutlinedIcon} />
        </div>
    )
}

export default Sidebar;
