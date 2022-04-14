// Citation: Code sourced from Prof. Annunziato's GitHub

import React from "react";
import {useDispatch} from "react-redux";
import {updateTuit} from "../../../actions/tuits-actions";

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
                Likes: {tuit.likes}
                <i onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    likes: tuit.likes + 1
                })} className="far fa-thumbs-up ms-2"></i>
            </div>
            <div>
                Dislikes: {tuit.dislikes}
                <i onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    dislikes: tuit.dislikes + 1
                })} className="far fa-thumbs-down ms-2"></i>
            </div>
            <div className="col">
                <i className="fas fa-external-link-alt me-2"></i>
            </div>
        </div>
    )
}

export default TuitStats;