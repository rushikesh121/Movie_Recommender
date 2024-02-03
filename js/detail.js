// Importing the 'fs' (File System) module using require
import { sidebar } from "./sidebar.js";
import { imageBaseUrl, apiKey, fetchData } from "./api.js";
import { createMovieCard } from "./Movie.js";

sidebar();


const getGenres = function (genreList) {
    const newGenreList = [];
    for (const { name } of genreList)
        newGenreList.push(name);

    return newGenreList.join(", ");

}

const getCastes = function (castList) {
    const newCastList = [];
    let len = castList.length;
    for (let i = 0; i < len && i < 10; i++) {
        const { name } = castList[i];
        newCastList.push(name);
    }
    return newCastList.join(", ");

}
const getDirectors = function (crewList) {
    const directors = crewList.filter(({ job }) => job === "Director");

    const directorList = [];
    for (const { name } of directors) directorList.push(name);
    return directorList.join(", ");
};
const filterVideos = function (videoList) {
    return videoList.filter(
        ({ type, site }) =>
            (type === "Trailer" || type === "Teaser") && site === "Youtube"
    );
};
const movie_id = window.localStorage.getItem("movieId");
console.log("movie Id", movie_id);
fetchData(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&append_to_response=casts,videos,images,releases`, function (movie) {
    const {
        backdrop_path,
        poster_path,
        title,
        release_date,
        runtime,
        vote_average,
        releases: {
            countries: [{ certification }],
        },
        genres,
        overview,
        casts: { cast, crew },
        videos: { results: videos },
    } = movie;
    document.title = `${title}-MovieMagnet`;
    // <div class="movie-detail">
    const page = document.createElement("div");
    page.classList.add("movie-detail");
    page.innerHTML = `
    <figure class="poster-box movie-poster">
    <img src="${imageBaseUrl}${"w1280" || "original"}${backdrop_path || poster_path}"
        class="img-cover" alt="${title}">
</figure>
<div class="detail-box">
    <div class="detail-content">
        <h1 class="heading">${title}</h1>
        <div class="meta-list1">
            <div class="meta-item1">
                <img src="./assets/images/star.png" alt="">
                <span class="span">${vote_average}</span>
                <div class="meta-item">${runtime}</div>
                <div class="separator"></div>
                <div class="meta-item">${release_date}</div>
                <div class="meta-item card-badge">${certification}</div>
            </div>
            <div class="genre">${getGenres(genres)}</div>
            <div class="overview">${overview}</div>
            <ul class="detail-list">
                <div class="list-item">
                    <div class="list-name">
                        Starring
                    </div>
                    <p>
                        ${getCastes(cast)}
                    </p>
                </div>
                <div class="list-item">
                    <div class="list-name">
                        Directed By
                    </div>
                    <p>
                        ${getDirectors(crew)}
                    </p>
                </div>
            </ul>
        </div>
    </div>
</div>
      `;
      document.querySelector(".banner").prepend(page);
    
      fetchData(
          `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${apiKey}&page=1`,
          function({results:movieList}){
              for(const mov of movieList){
                  const m=createMovieCard(mov);
                  document.querySelector(".inner-slider").appendChild(m);     
                }
        }
      );

    
});