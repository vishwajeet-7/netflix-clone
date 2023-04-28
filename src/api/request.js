

const requests = {
    fetchTrending:`/trending/all/week?api_key=${process.env.REACT_APP_API_AUTH_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${process.env.REACT_APP_API_AUTH_KEY}&with_network=213`,
    fetchTopRated:`/movie/top_rated?api_key=${process.env.REACT_APP_API_AUTH_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${process.env.REACT_APP_API_AUTH_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${process.env.REACT_APP_API_AUTH_KEY}&with_genres=35`,
    fetchHorroeMovies:`/discover/movie?api_key=${process.env.REACT_APP_API_AUTH_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${process.env.REACT_APP_API_AUTH_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${process.env.REACT_APP_API_AUTH_KEY}&with_genres=99`
}

export default requests;
// https://api.themoviedb.org/3/discover/tv?api_key=b4a1b28a37b3373d46f4c7bdcf9969da&with_network=213