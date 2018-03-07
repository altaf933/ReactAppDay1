var BASE_URL = "https://api.themoviedb.org/3/movie/";
var API_KEY_VALUE = "Your Key"
var LANGUAGE = "en-US"
var LANGUAGE_KEY = "language"
var API_KEY = "api_key"
exports.TOP_RATEDMOVIE = BASE_URL + 'popular?' + API_KEY + '=' + API_KEY_VALUE + '&' + LANGUAGE_KEY + '=' + LANGUAGE;