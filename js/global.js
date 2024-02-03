const addEventOnElements = function (elements, eventType, callback) {
    for (const elem of elements) elem.addEventListener(eventType, callback);
};



// store movie id in localstorafe

export const getMovieDetail=function(movieId){
    window.localStorage.setItem("movieId",String(movieId));
}

