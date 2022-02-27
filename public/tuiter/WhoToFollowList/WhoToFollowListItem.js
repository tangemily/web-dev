const WhoToFollowListItem = (who) => {
    return (`
            <li class="list-group-item align-items-center flex-row d-inline-flex justify-content-between">
                <div class="d-flex">
                    <img class="rounded-circle me-2"
                         src=${who.avatarIcon}
                         width="48px"
                         height="48px">
                    <div>
                        <div class="fw-bold ">${who.userName}</div>
                        ${who.handle}
                    </div>
                </div>
                <button class="btn btn-primary rounded-pill">Follow</button>
            </li>
    `);
}
export default WhoToFollowListItem;
