import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
            <div class="col">
                <!-- search field and cog -->
                <div class="input-group mb-2">
                    <span class="input-group-text bg-transparent rounded-pill">
                        <i class="fa-solid fa-search border-right-0"></i></span>
                    <input type="text"
                           class="form-control border-left-0 rounded-pill"
                           placeholder="Search Twitter"
                           aria-label="from"
                           aria-describedby="from">
                    <span class="input-group-text bg-transparent border-0">
                        <a href="explore-settings.html">
                            <i class="fa-solid fa-cog fa-2x"></i></a></span>
                </div>

               <ul class="nav mb-2 nav-tabs">
                    <!-- tabs -->
                    <li class="nav-item">
                        <a class="nav-link active"
                           href="#">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                           href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                           href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                           href="#">Sports</a>
                    </li>
                    <li class="nav-item d-sm-none d-md-block d-lg-block d-xl-block">
                        <a class="nav-link"
                           href="#">Entertainment</a>
                    </li>
               </ul>
               <!-- image with overlaid text -->
               <div class="card text-white mb-2">
                    <img class="card-img"
                         src="../images/starship.jpg"
                         alt="Card image">
                    <div class="d-flex card-img-overlay align-items-end">
                        <h5 class="card-title fw-bold">SpaceX's Starship</h5>
                    </div>
               </div>
               ${PostSummaryList()}
            </div>
           
    `);
}
export default ExploreComponent;
