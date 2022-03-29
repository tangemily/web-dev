import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    return (
        <>
            <div className="list-group">
                <a className="list-group-item"
                   href="/">
                    <i className="fab fa-twitter"></i></a>
                <a href="../home.html"
                   className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`}>
                    <i className="fa-solid fa-house"></i>
                    <span className="d-sm-none d-md-none d-lg-none d-xl-inline-block"> Home</span></a>
                <a href="../explore.html"
                   className={`list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}`}>
                    <i className="fa-solid fa-hashtag"></i>
                    <span className="d-sm-none d-md-none d-lg-none d-xl-inline-block"> Explore</span></a>
                <a href="../notifications.html"
                   className={`list-group-item list-group-item-action ${active === 'notifications' ? 'active' : ''}`}>
                    <i className="fa-solid fa-bell"></i>
                    <span className="d-sm-none d-md-none d-lg-none d-xl-inline-block"> Notifications</span></a>
                <a href="../messages.html"
                   className={`list-group-item list-group-item-action ${active === 'messages' ? 'active' : ''}`}>
                    <i className="fa-solid fa-envelope"></i>
                    <span className="d-sm-none d-md-none d-lg-none d-xl-inline-block"> Messages</span></a>
                <a href="../bookmarks.html"
                   className={`list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}`}>
                    <i className="fa-solid fa-bookmark"></i>
                    <span className="d-sm-none d-md-none d-lg-none d-xl-inline-block"> Bookmarks</span></a>
                <a href="../lists.html"
                   className={`list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}`}>
                    <i className="fa-solid fa-list"></i>
                    <span className="d-sm-none d-md-none d-lg-none d-xl-inline-block"> Lists</span></a>
                <a href="../profile.html"
                   className={`list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}`}>
                    <i className="fa-solid fa-user"></i>
                    <span className="d-sm-none d-md-none d-lg-none d-xl-inline-block"> Profile</span></a>
                <a href="../more.html"
                   className={`list-group-item list-group-item-action ${active === 'more' ? 'active' : ''}`}>
                    <i className="fa-solid fa-ellipsis"></i>
                    <span className="d-sm-none d-md-none d-lg-none d-xl-inline-block"> More</span></a>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );
}
export default NavigationSidebar;
