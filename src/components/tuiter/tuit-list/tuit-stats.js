// Citation: Code sourced from Prof. Annunziato's GitHub

import React from "react";
import {useDispatch} from "react-redux";
import {updateTuit} from "../../../actions/tuits-actions";
import '../tuiter.css'

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();

    return (
        <div className="row mt-2">
            <div className="col">
                <i className="far fa-comment me-2"></i>
                {tuit.stats?.comments}
            </div>
            <div className="col">
                <i className="fas fa-retweet me-2"></i>
                {tuit.stats?.retuits}
            </div>
            <div className="col">
                {tuit.likes}
                <i onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
                    liked: tuit.liked ? false : true,
                })} className={`fa-thumbs-up ms-2 row ${tuit.liked ? "fa-solid" : "fa-regular"}`}></i>
            </div>
            <div className="col">
                {tuit.dislikes}
                <i onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    dislikes: tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1,
                    disliked: tuit.disliked? false : true,
                })} className={`fa-thumbs-down ms-2 row ${tuit.disliked ? "fa-solid" : "fa-regular"}`}></i>
            </div>
            <div className="col">
                <i className="fas fa-external-link-alt me-2"></i>
            </div>
        </div>
    )
}

export default TuitStats;