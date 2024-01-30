
import { imageBaseUrl ,apiKey,fetchData} from "./api.js"


export const createMovieCard=function(movie) {
 const { poster_path, title, vote_average, release_date, id } = movie;

   const card=document.createElement("div");
   card.classList.add("movie-card");
   card.innerHTML=`
   <div class="movie-img">
   <img src="${imageBaseUrl}w342${poster_path}" class="ds" alt="">
</div>
<h3 class="title">${title}</h3>
<div class="meta-list">
   <div class="meta-item">
       <img src="./assets/images/star.png" alt="">
       <span class="span">${vote_average}</span>
   </div>
   <div class="card-badge">${release_date.split("-")[0]}</div>
</div>
   `;  
   return card;
   



}