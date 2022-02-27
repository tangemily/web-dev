const PostSummaryItem = (post) => {
    return (`
            <li class="list-group-item align-items-center justify-content-around flex-row d-flex">
                <div class="float-left text-wrap wd-explore-text"
                     style="width:90%">
                    <div class="text-muted">${post.topic}</div>
                    <b>${post.userName}</b>
                    <span class="text-muted">- ${post.time}</span><br>
                    <b>${post.title}</b>
                </div>
                <img class="rounded float-right"
                     src=${post.image}
                     width=75px
                     height=75px>
            </li>
    `);
}
export default PostSummaryItem;
