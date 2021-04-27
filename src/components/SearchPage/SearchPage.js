import React from 'react';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow/ChannelRow';
import VideoRow from './VideoRow/VideoRow';

import './SearchPage.css';

const SearchPage = () => {

    return ( 
        <div className="searchPage" >
            <div className="searchPage__filter">
                <TuneOutlinedIcon /> 
                <h2>FILTER</h2>
            </div>

            <hr />

            <ChannelRow
                image="https://kfth.github.io/hyf-html-css/week1/images/developer.svg"
                channel="Flash Developers"
                subs="7.7M"
                numberOfVideos={77}
                description="Flash Developers is all about teaching web development skills and techniques in an efficient and practical manner."
                verified={true}
            />

            <hr />
            
            <VideoRow 
                image="https://i.ytimg.com/vi/Q33KBiDriJY/maxresdefault.jpg"
                title="Web Development Full Course - 10 Hours | Learn Web Development from Scratch | Edureka "
                channel="Edureka"
                subs="5.8M"
                description="Web Development Full Course - 10 Hours | Learn Web Development from Scratch | Edureka "
                views="2.6M Views"
                timeStamp="1 year ago"
            />

            <hr />
            
            <VideoRow 
                image="https://i.ytimg.com/vi/k0NzJ3zyJ_k/maxresdefault.jpg"
                title="Web Development Roadmap 2021 | Ishan Sharma | GeeksforGeeks"
                channel="GeeksforGeeks"
                subs="1.3M"
                description="Web Development is one of the most demanding domains in the Software Industry and here we bring you A Complete Web development course."
                views="35K Views"
                timeStamp="7 months ago"
            />

            <hr />
            
            <VideoRow 
                image="https://codingthesmartway.com/wp-content/uploads/2019/12/The_2020_Roadmap_Fullstack_Web_Development_Title.png"
                title="How to Become a Full Stack Web Developer | Complete Roadmap"
                channel="CodeWithHarry"
                subs="5M"
                description="Become a Full Stack Developer: In this video we will see how a beginner can become a full stack web developer in a very short period of time."
                views="389K Views"
                timeStamp="5 months ago"
            />

            <hr />
            
            <VideoRow 
                image="https://i.ytimg.com/vi/RjHflb-QgVc/maxresdefault.jpg"
                title="WEB DEVELOPMENT explained in 10 minutes (2020)"
                channel="Aaron Jack"
                subs="177K"
                description="Join Freemote: The Freelance Developer Bootcamp https://freemote.com/ Watch 100% FREE : Become a Full Stack Developer."
                views="135K Views"
                timeStamp="1 year  ago"
            />
        </div>
    )
};

export default SearchPage;