import { imageBaseUrl, apiKey, fetchData } from "./api.js";
import { sidebar } from "./sidebar.js";
import  {createMovieCard} from "./Movie.js";
import { getMovieDetail } from "./global.js";

sidebar();

fetchData(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`, 
function ({ results: movieList }) {
    // console.log(movieList);
  
    let controlItemIndex = 0;
  
    for (const [index, movie] of movieList.entries()) {
      const {
        backdrop_path,
        title,
        release_date,
        genre_ids,
        overview,
        poster_path,    
        vote_average,
        id,
      } = movie;
    //  document.getElementsByClassName("img-cover")[0].src=backdrop_path;
    const slider_item=(document.querySelectorAll(".slider-item")[0])
    slider_item.getElementsByClassName("img-cover")[0].src=`${imageBaseUrl}w154${poster_path}`;
    slider_item.getElementsByClassName("heading")[0].innerHTML=title;
    slider_item.querySelectorAll(".meta-item")[0].innerHTML=release_date;
    slider_item.querySelectorAll(".meta-item")[1].innerHTML=vote_average;
    slider_item.querySelectorAll(".banner-text")[0].innerHTML=overview;
    document.getElementsByClassName("watch-now")[0].addEventListener('click',getMovieDetail(`${id}`));
    }

  
});

// Home page section (top rated, upcoming, trending)

const homePageSection=[
  {
      title:"Upcoming Movies",
      path: "/movie/upcoming"
  }
];

for(const {title,path} of homePageSection){
  fetchData(`https://api.themoviedb.org/3${path}?api_key=${apiKey}&page=1`,function ({ results: movieList },homePageSection){
    // console.log(movieList)
        const movieListElement=document.createElement("section");
        movieListElement.classList.add("movie-list");
       
        const mov=`<div class="title-wrapper">
        <h2 class="title-large">${title}</h2>
    </div>
    <div class="slider-li">
        <div class="inner-slider">
            <div class="movie-card">
                <div class="movie-img">
                    <img src="./assets/images/slider-control.jpg" alt="">
                </div>
                <h3 class="title">Puss in Boots:The Last Wish</h3>
                <div class="meta-list">
                    <div class="meta-item">
                        <img src="./assets/images/star.png" alt="">
                        <span class="span">7.1</span>
                    </div>
                    <div class="card-badge">2023</div>
                </div>
            </div>
            <div class="movie-card">
                <div class="movie-img">
                    <img src="./assets/images/slider-control.jpg" alt="">
                </div>
                <h3 class="title">Puss in Boots:The Last Wish</h3>
                <div class="meta-list">
                    <div class="meta-item">
                        <img src="./assets/images/star.png" alt="">
                        <span class="span">7.1</span>
                    </div>
                    <div class="card-badge">2023</div>
                </div>
            </div>
            <div class="movie-card">
                <div class="movie-img">
                    <img src="./assets/images/slider-control.jpg" alt="">
                </div>
                <h3 class="title">Puss in Boots:The Last Wish</h3>
                <div class="meta-list">
                    <div class="meta-item">
                        <img src="./assets/images/star.png" alt="">
                        <span class="span">7.1</span>
                    </div>
                    <div class="card-badge">2023</div>
                </div>
            </div>
            <div class="movie-card">
                <div class="movie-img">
                    <img src="./assets/images/slider-control.jpg" alt="">
                </div>
                <h3 class="title">Puss in Boots:The Last Wish</h3>
                <div class="meta-list">
                    <div class="meta-item">
                        <img src="./assets/images/star.png" alt="">
                        <span class="span">7.1</span>
                    </div>
                    <div class="card-badge">2023</div>
                </div>
            </div>
            <div class="movie-card">
                <div class="movie-img">
                    <img src="./assets/images/slider-control.jpg" alt="">
                </div>
                <h3 class="title">Puss in Boots:The Last Wish</h3>
                <div class="meta-list">
                    <div class="meta-item">
                        <img src="./assets/images/star.png" alt="">
                        <span class="span">7.1</span>
                    </div>
                    <div class="card-badge">2023</div>
                </div>
            </div>
            <div class="movie-card">
                <div class="movie-img">
                    <img src="./assets/images/slider-control.jpg" alt="">
                </div>
                <h3 class="title">Puss in Boots:The Last Wish</h3>
                <div class="meta-list">
                    <div class="meta-item">
                        <img src="./assets/images/star.png" alt="">
                        <span class="span">7.1</span>
                    </div>
                    <div class="card-badge">2023</div>
                </div>
            </div>
            <div class="movie-card">
                <div class="movie-img">
                    <img src="./assets/images/slider-control.jpg" alt="">
                </div>
                <h3 class="title">Puss in Boots:The Last Wish</h3>
                <div class="meta-list">
                    <div class="meta-item">
                        <img src="./assets/images/star.png" alt="">
                        <span class="span">7.1</span>
                    </div>
                    <div class="card-badge">2023</div>
                </div>
            </div>
            <div class="movie-card">
                <div class="movie-img">
                    <img src="./assets/images/slider-control.jpg" alt="">
                </div>
                <h3 class="title">Puss in Boots:The Last Wish</h3>
                <div class="meta-list">
                    <div class="meta-item">
                        <img src="./assets/images/star.png" alt="">
                        <span class="span">7.1</span>
                    </div>
                    <div class="card-badge">2023</div>
                </div>
            </div>
        </div>
    </div>`;
    movieListElement.innerHTML=mov;

  for (const movie of movieList) {
  const m=createMovieCard(movie);
document.querySelector(".inner-slider").appendChild(m);
}
    });


    
    
  
}

