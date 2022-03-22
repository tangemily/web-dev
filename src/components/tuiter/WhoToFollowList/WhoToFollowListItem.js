import React from "react";

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '../images/java.png',
            userName: 'Java',
            handle: 'Java',
        }
    }) => {
        return (
            <>
                <li className="list-group-item align-items-center flex-row d-inline-flex justify-content-between">
                    <div className="d-flex">
                        <img className="rounded-circle me-2"
                             src={who.avatarIcon}
                             width="48px"
                             height="48px"/>
                            <div>
                                <div className="fw-bold ">{who.userName}</div>
                                @{who.handle}
                            </div>
                    </div>
                    <button className="btn btn-primary rounded-pill">Follow</button>
                </li>
            </>
        );
}
export default WhoToFollowListItem;
