// Citation: Code sourced from Prof. Annunziato's GitHub

import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";
import "../tuiter.css";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitClickHandler = () => {
        dispatch({type: 'delete-tuit', tuit})
    }
    return (
        <li className="list-group-item">
            <table>
                <tr>
                    <td className="align-text-top">
                        <img className="rounded-circle wd-avatar-image"
                             src={tuit['logo']}/>
                    </td>
                    <td className="ps-3"
                        style={{width: '100%'}}>
                        <i onClick={deleteTuitClickHandler}
                           className="fa fa-remove fa-pull-right"></i>
                        <span className="fw-bold">{tuit.postedBy.username}</span>
                        {tuit.verified && <i className="ms-1 fas fa-badge-check"></i>}
                        <span className="ms-1 text-secondary">@{tuit.handle}</span>
                        <div>
                            {tuit.tuit}
                        </div>
                        {
                            tuit.attachments && tuit.attachments.image &&
                            <img src={tuit.attachments.image}
                                 className="mt-2 wd-border-radius-20px"
                                 style={{width: "100%"}}/>
                        }
                        {
                            tuit.attachments && tuit.attachments.video &&
                            <iframe width="100%"
                                    height="350px"
                                    className="mt-2 wd-border-radius-20px"
                                    style={{width: "100%"}}
                                    src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        }
                        <TuitStats tuit={tuit}/>
                    </td>
                </tr>
            </table>
        </li>
    );
};
/*
const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();

    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };

    return (
        <div>
            <div>
                <li className="list-group-item align-items-center flex-row d-inline-flex justify-content-between wd-tuit">
                    <div className="d-flex">
                        <img className="rounded-circle me-2 wd-tuit-image"
                             src={tuit.avatar}/>
                        <div className="text-wrap">
                            <span>
                                <div className="fw-bold d-inline">{tuit.handle}</div>
                                <div className="text-muted d-inline"> @{tuit.postedBy.username}</div>

                            </span> <br/>
                            {tuit.tuit} <br/>
                        </div>
                        <i onClick={() => deleteTuit(tuit)}
                           className="fa-solid fa-xmark fa-pull-right"></i>


                    </div>
                </li>
            </div>
        </div>
    );
};
*/

export default TuitListItem;