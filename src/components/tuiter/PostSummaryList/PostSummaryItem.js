import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "/tuiter/images/react-blue.png"
        }
    }) => {
    return (
        <>
            <li className="list-group-item align-items-center justify-content-around flex-row d-flex">
                <div className="float-left text-wrap wd-explore-text">
                    <div className="text-muted">{post.topic}</div>
                    <b>{post.userName}</b>
                    <span className="text-muted"> - {post.time}</span><br/>
                    <b>{post.title}</b>
                </div>
                <img className="rounded float-right"
                     width="75px"
                     height="75px"
                     src={post.image}/>
            </li>
        </>
    )
        ;
};

export default PostSummaryItem;
