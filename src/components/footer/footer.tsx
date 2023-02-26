import React from 'react';
import './footer.scss'

const footer = () => {
    return (
        <div className='footer'>
            <div className="movie-app">
                Cinema App
            </div>
            <div>
                {`@ ${new Date().getFullYear()} , Movie`}
            </div>
        </div>
    );
};

export default footer;
