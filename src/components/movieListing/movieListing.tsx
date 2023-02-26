import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../movieCard/movieCard';
import  './movieListing.scss';
import  { movieTypes } from '../../modals/movie';
import './movieListing.scss';
import { settings } from '../../common/settings';

const movieListing = () => {
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    let renderMovies, renderShows = "";
    renderMovies = movies.Response === "True" ? (
        movies.Search.map((movie: movieTypes) =><MovieCard {...movie}/>)
    ) :
    (
        <div className ="movies-error">
            <h3>{movies.Error}</h3>
        </div>
    );

    renderShows = shows.Response === "True" ? (
        shows.Search.map((show: movieTypes) =><MovieCard {...show}/>)
    ) :
    (
        <div className ="movies-error">
            <h3>{shows.Error}</h3>
        </div>
    )


    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>
                    <Slider {...settings}>{renderMovies}</Slider>
                </div>
            </div>

            <div className='show-list'>
                <h2>Shows</h2>
                <div className='movie-container'>
                    <Slider {...settings}>{renderShows}</Slider>
                </div>
            </div>
        </div>
    );
};

export default movieListing;
