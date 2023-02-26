import React from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import userIcon from '../../images/user.png';
import './header.scss'
import { useState } from 'react';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const header = () => {
    const dispatch = useDispatch<any>();
    const [term, setTerm] = useState('');

    const submitHandler =(e:any) =>{
        e.preventDefault();
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        setTerm('');
    }
    return (
        <div className='header'>
            <div className='logo'>
                <Link to='/'>
                  Cinema App
                </Link>
            </div>
            <div className='search-bar'>
                <form onSubmit={submitHandler}>
                    <input type="text" value={term} placeholder='Search Movies or Series'
                            onChange={(e) => setTerm(e.target.value)}/>
                    <button type="submit"> <i className='fa fa-search'></i></button>
                </form>

            </div>
            <div className="user-image">
                <img src={userIcon} alt="user" />
            </div>
        </div>
    );
};

export default header;
