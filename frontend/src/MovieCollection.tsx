import React from 'react';
import TopBanner from './Blah';
import MovieList from './Movies';

const MovieCollection: React.FC = () => {
  return (
    <div className="App">
      <h1>Joel' Movie Collection</h1>
      {/* <TopBanner websiteTitle="Riley's Website!" /> */}
      <MovieList />{' '}
    </div>
  );
};

export default MovieCollection;
