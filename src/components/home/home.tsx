import React, { useEffect } from 'react';
import MovieListing from '../movieListing/movieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const home = () => {
    const dispatch = useDispatch<any>();
    const movie = 'Mission';
    const show= 'Friends'

    useEffect(() =>{
        dispatch(fetchAsyncMovies(movie))
        dispatch(fetchAsyncShows(show))
    },[])
    return (
        <div>
            <div className='banner-img'>
            </div>
            <MovieListing />
        </div>
    );
};

export default home;
