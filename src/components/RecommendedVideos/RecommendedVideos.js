import React from 'react';

import './RecommendedVideos.css';

import VideoCard from './VideoCard/VideoCard';

const RecommendedVideos = () => {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <hr />
            <div className="recommendedVideos__video">
                <VideoCard 
                    image="https://i.ytimg.com/vi/fLRs8STMIkg/hqdefault.jpg"
                    title="Web Development Projects For Beginners 2020 | Web Development Projects Ideas | Simplilearn"
                    channel="Simplilearn"
                    views="4.8K Views"
                    timeStamp="5 months ago"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwnhJqtFsDmOEb6Hr30-AtA9e_K2-rJE1J-IbfaB0WQ=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard 
                    image="https://i.ytimg.com/vi/1rsuxwVD98I/maxresdefault.jpg"
                    title="Web Development Projects | Web Development Project Ideas For Beginners | Edureka"
                    channel="Edureka"
                    views="65K Views"
                    timeStamp="1 year ago"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwni7i_dF9urC5uwdLIRQU89f5H4krFAgJgywql8kiA=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard 
                    image="https://i.ytimg.com/vi/jOFco1xuIeo/maxresdefault.jpg"
                    title="5 Projects Every Programmer Should Try | Web Development Project Ideas | Kalle Hallden"
                    channel="Kalle Hallden"
                    views="1M Views"
                    timeStamp="1 year ago"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwnjXndA1IozeIYHvyWML5BLjhrXBkqvtnSXjwOwOyQ=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard 
                    image="https://mightydeals.s3.amazonaws.com/alt-teaser-images/2379/Complete-Web-Developer.png"
                    title="Complete Free Web Development Course: Become A Professional Website Developer Today!"
                    channel="Joe Parys Academy"
                    views="1.9M Views"
                    timeStamp="4 years ago"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwnj_qH0vCEILO3ufHGWjH2A899nWHlDk3ekvdLYx=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard 
                    image="https://i.ytimg.com/vi/U_gANjtv28g/maxresdefault.jpg"
                    title="7 Amazing Developer Tools that you're not using yet | Fireship"
                    channel="Fireship"
                    views="1.4M Views"
                    timeStamp="2 years ago"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwnjWfh0Ki7uJWaYNhpZyG8ataxCL9N5SscOhfZfGXg=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard 
                    image="https://i.ytimg.com/vi/OXi4T58PwdM/maxresdefault.jpg"
                    channel="Tech With Tim"
                    title="15 Python Projects in Under 15 Minutes (Code Included)"
                    views="1.4M Views"
                    timeStamp="1 year ago"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwnhIFsTY7d1nrpmQ7RWafOXqQIWBVtPePQvJ6JliOg=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard 
                    image="https://i.ytimg.com/vi/oC483DTjRXU/maxresdefault.jpg"
                    title="The 1 Coding Project Idea Guaranteed To Get You A Software Development Job!"
                    channel="Coder Foundry"
                    views="777K Views"
                    timeStamp="1 year ago"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwngdkZpmrYTlr4lprh6vRv6_mDHR1lGpo5QAXeEEjQ=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard 
                    image="https://i.ytimg.com/vi/3PHXvlpOkf4/maxresdefault.jpg"
                    title="Build 15 JavaScript Projects - Vanilla JavaScript Course"
                    channel="FreeCodeCamp.org"
                    views="547K Views"
                    timeStamp="10 months ago"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s68-c-k-c0x00ffffff-no-rj"
                />
            </div>
        </div>
    )
};

export default RecommendedVideos;
