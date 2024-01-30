
import { apiKey, imageBaseUrl, fetchData } from "./api.js";

export function sidebar() {

    const genreList = {};
    fetchData(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`, function ({ genres }) {

        for (const { id, name } of genres) {
            genreList[id] = name;
        }
       
        genreLink();
    });


    const genreLink = function () {
        for (const [genreId, genreName] of Object.entries(genreList)) {
            const link = document.createElement("a")
            link.classList.add("sidebar-link");
            link.setAttribute("href", "./movieDetails.html")
            //   a.setAlttribute("onclick",`getMovieList("with_genres=${genreId}","${genreName}"`)
            link.textContent = genreName;
            document.querySelectorAll(".siderbar-list")[0].appendChild(link);

        }
    }

}