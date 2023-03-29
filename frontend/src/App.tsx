import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './Blah';
import MovieList from './Movies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Podcast from './Podcast';
import MovieCollection from './MovieCollection';
import Navbar from './Navbar';

// function GoButton(props: any) {
//   return (
//     <div>
//       <button onClick={props.blahClick}>GO</button>
//       <br />
//     </div>
//   );
// }

// function AmountOfGo(props: any) {
//   return <label>{props.num}</label>;
// }

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <GoButton blahClick={() => setCount(count + 1)} />
//       <AmountOfGo num={count} />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <TopBanner websiteTitle="Riley's Website!" />
//       <MovieList />
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/moviecollection" element={<MovieCollection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
