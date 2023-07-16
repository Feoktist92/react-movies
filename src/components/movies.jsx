import React from 'react';
import { Movie } from './movie';

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className='movies'>
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
            ) : (
                <h3>Nothing found</h3>
            )}
        </div>
    );
}

export { Movies };
