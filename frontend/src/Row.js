import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css"
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow, user }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [currentMovie, setCurrentMovie] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl && currentMovie.title === movie.title) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.title || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
                setCurrentMovie(movie)
            })
            .catch(error => {setCurrentMovie(""); setTrailerUrl(error)});
        }
    }

    const handleAddMovie = () => {
        let objectConfig = {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                youtube_url: trailerUrl,
                title: currentMovie.title,
                overview: currentMovie.overview,
                list_id: 1
            })
        }
        fetch('http://localhost:3001/videos', objectConfig)
        .then(res => res.json())
        .then(video => console.log(video))
    }

    const [currentUser, setUser] = useState('');

    useEffect(() => {
      fetch('http://localhost:3001/currentuser', {
        credentials: 'include'
      })
      .then(res => res.json())
      .then(user => setUser(user))
      }, []);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row-posters">
                {movies.map(movie => (
                    movie.backdrop_path ? 
                    <img
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                    : ""
                ))}
            </div>
                {trailerUrl ? 
                currentMovie ? 
                <div>
                <h5>{currentMovie.title}</h5>
                <YouTube videoId={trailerUrl} 
                opts={opts}/>
                {user ? <button className='add-movie' placeholder='Add Movie' onClick={() => handleAddMovie()}>Add Movie</button> : ""}
                </div> 
                : <div><h2>Sorry, there is no trailer for this movie</h2></div> 
                : ""}
        </div>
    )
}

export default Row