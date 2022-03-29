import PostSummaryList from "../PostSummaryList";
import React from "react";
import "../tuiter.css";

const ExploreComponent = ({active = 'foryou'}) => {
    return (
        <>
            <div className="col">
                <div className="input-group mb-2">
                    <span className="input-group-text bg-transparent rounded-pill">
                        <i className="fa-solid fa-search border-right-0"></i></span>
                    <input type="text"
                           className="form-control border-left-0 rounded-pill"
                           placeholder="Search Twitter"
                           aria-label="from"
                           aria-describedby="from"/>
                    <span className="input-group-text bg-transparent border-0">
                        <a href="explore-settings.html">
                            <i className="fa-solid fa-cog fa-2x"></i></a></span>
                </div>

                <ul className="nav mb-2 nav-tabs">
                    <li className="nav-item">
                        <a className={`nav-link ${active === 'foryou' ? 'active' : ''}`} href="../foryou.html">For You</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${active === 'trending' ? 'active' : ''}`} href="../trending.html">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${active === 'news' ? 'active' : ''}`} href="../news.html">News</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${active === 'sports' ? 'active' : ''}`} href="../sports.html">Sports</a>
                    </li>
                    <li className="nav-item d-sm-none d-md-block d-lg-block d-xl-block">
                        <a className={`nav-link ${active === 'entertainment' ? 'active' : ''}`} href="../entertainment.html">Entertainment</a>
                    </li>
                </ul>
                <div className="card text-white mb-2">
                    <img className="card-img"
                         src="/tuiter/images/starship.jpg"
                         alt="Card image"/>
                        <div className="d-flex card-img-overlay align-items-end">
                            <h5 className="card-title fw-bold">SpaceX's Starship</h5>
                        </div>
                </div>
                {PostSummaryList()}
            </div>
        </>
);
}

export default ExploreComponent;
