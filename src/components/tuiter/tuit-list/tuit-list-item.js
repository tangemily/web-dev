import React from "react";

import {useDispatch} from "react-redux";
// import TuitStats from "../home-screen/tuits-stats";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();

    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };

    return (
        <div>
            <div>
                <li className="list-group-item align-items-center flex-row d-inline-flex justify-content-between">
                    <div className="d-flex">
                        <img className="rounded-circle me-2"
                             src={tuit.avatar}
                             width="48px"
                             height="48px"/>
                        <div className="text-wrap">
                            <span>
                                <div className="fw-bold d-inline">{tuit.handle}</div>
                                <div className="text-muted d-inline"> @{tuit.postedBy.username}</div>
                                <i onClick={() => deleteTuit(tuit)}
                                   className="fa-solid fa-xmark float-end"></i>
                            </span> <br/>
                            {tuit.tuit} <br/>
                        </div>

                        {/*<div>*/}
                        {/*    {tuit.attachments ?*/}
                        {/*        (tuit.attachments.video ?*/}
                        {/*            <div>*/}
                        {/*                <iframe width="540"*/}
                        {/*                        height="300"*/}
                        {/*                        src={"https://www.youtube.com/embed/" + tuit.attachments.video}*/}
                        {/*                        title="YouTube video player"*/}
                        {/*                        frameBorder="0"*/}
                        {/*                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
                        {/*                        className="wd-tuit-list-item-attachment-video"*/}
                        {/*                        allowFullScreen>*/}

                        {/*                </iframe>*/}
                        {/*            </div>*/}
                        {/*            : <div><img className="wd-tuit-list-item-attachment-img"*/}
                        {/*                        src={tuit.attachments.image}/></div>)*/}
                        {/*        : <div></div>}*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <TuitStats tuit={tuit}/>*/}
                        {/*</div>*/}
                    </div>
                </li>
            </div>
        </div>
    );
};

export default TuitListItem;