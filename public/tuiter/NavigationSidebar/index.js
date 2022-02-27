const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
                <a href="home.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-house"></i></a>
                <a href="#"
                   class="list-group-item list-group-item-action active">
                    <i class="fa-solid fa-hashtag"></i></a>
                <a href="notifications.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-bell"></i></a>
                <a href="messages.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-envelope"></i></a>
                <a href="bookmarks.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-bookmark"></i></a>
                <a href="lists.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-list"></i></a>
                <a href="profile.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-user"></i></a>
                <a href="more.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-ellipsis"></i></a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
