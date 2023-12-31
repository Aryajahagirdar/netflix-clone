import React, { useEffect, useState } from "react";
import axios from "./axios"
import "./Row.css"
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer";

const baseImgURL = "https://image.tmdb.org/t/p/original/"

function Row(props) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [props.fetchURL])

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('');
        }
        else{
            movieTrailer(movie?.name || "").then(url =>{
                const urlParam = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParam.get('v'));
            }).catch(error=>console.log(error))
        }
    }

    return (
        <div className="row">
            <h2>{props.title}</h2>

            <div className="row_posters">
                {movies.map(movie => (
                    <img key={movie.id} 
                    onClick={()=>handleClick(movie)}
                    className={`row_poster ${props.isLargeRow && "row_posterLarge"}`} 
                    src={`${baseImgURL}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.title} 
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId = {trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;