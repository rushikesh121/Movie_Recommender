const apiKey = '963c64d17df40c0207faf121d763e23e';
const imageBaseUrl = 'https://image.tmdb.org/t/p/';

const fetchData =  function (url, callback, option) {
      fetch(url)
        .then(response => response.json())
        .then(data => callback(data, option));
        
}
export {apiKey,imageBaseUrl,fetchData};