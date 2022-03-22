import PostSummaryList from "../PostSummaryList";
import React from "react";

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

// const ExploreComponent = (
//     {
//         active = 'for-you'
//     }
// ) =>
//     {
//         return (
//             <div>
//                 <div className="d-flex align-items-center mb-2">
//                     <div className="input-group">
//                         <span className="input-group-text"><i className="fas fa-search"></i></span>
//                         <input type="text"
//                                className="form-control"
//                                placeholder="Search Tuiter"/>
//                     </div>
//                     <a href="../explore-settings.html"><i className="fas fa-cog fa-2x text-primary ms-4"></i></a>
//                 </div>
//                 <ul className="nav mb-2 nav-tabs mb-2 text-wrap">
//                     <li className="nav-item">
//                         <a className={`nav-link ${active === 'for-you' ? 'active' : ''}`}
//                            href="../../">For You</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className={`nav-link ${active === 'trending' ? 'active' : ''}`}
//                            href="../trending.html">Trending</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className={`nav-link ${active === 'news' ? 'active' : ''}`}
//                            href="../news.html">News</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className={`nav-link ${active === 'sports' ? 'active' : ''}`}
//                            href="../sports.html">Sports</a>
//                     </li>
//                     <li className="nav-item d-none d-md-block d-lg-block d-xl-block">
//                         <a className={`nav-link ${active === 'entertainment' ? 'active' : ''}`}
//                            href="../entertainment.html">Entertainment</a>
//                     </li>
//                 </ul>
//                 <div className="card rounded-0 border-bottom-0">
//                     <img src="../../tuiter/starship.jpeg"
//                          className="card-img-top rounded-0"/>
//                     <div className="card-img-overlay">
//                         <h3 className="card-title">SpaceX's Starship</h3>
//                     </div>
//                 </div>
//                 <PostSummaryList/>
//             </div>
//         );
//     }

export default ExploreComponent;
