import React from "react";


const TuitListItem = ({tuit}) => {
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
                            </span> <br/>
                            {tuit.tuit} <br/>
                        </div>
                    </div>
                </li>
            </div>
        </div>
    );
};

export default TuitListItem;