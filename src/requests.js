const api_key = "0fd4b28a59ad15e816df5c8b3adebfd9"

const requests = {
    fetchTrending: `/trending/movie/day?api_key=${api_key}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
    fetchDramaMovies: `/discover/movie?api_key=${api_key}&with_genres=18`,
    fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
    fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`
}

export default requests;