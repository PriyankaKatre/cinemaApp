import React from 'react';
import { movieTypes }  from '../../modals/movie';
import { Link } from 'react-router-dom';
import './movieCard.scss'

const movieCard = ({Poster, Title, Type, Year, imdbID}: movieTypes) => {
    return (
        <div className='card-item'>
            <Link to={`/movie/${imdbID}`}>
                <div className="card-inner">
                    <div className="card-top">
                        <img src={Poster} alt="Title" />
                    </div>
                </div>
                <div className="card-bottom">
                    <div className="card-info">
                        <h4>{Title}</h4>
                        <p>{Year}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default movieCard;
