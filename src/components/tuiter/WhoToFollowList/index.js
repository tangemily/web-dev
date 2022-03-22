import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"
import React from "react";

const WhoToFollowList = () => {
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
