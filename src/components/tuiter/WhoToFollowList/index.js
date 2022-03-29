import WhoToFollowListItem from "./WhoToFollowListItem";
import React from "react";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state);
    return (
        <ul class="list-group">
            <li class="list-group-item fw-bold">Who to Follow</li>
            {
                who.map(who => {
                    return (
                        <WhoToFollowListItem who={who}/>
                    );
                })
            }
        </ul>
    );
}

export default WhoToFollowList;
