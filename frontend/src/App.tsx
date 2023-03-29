import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './Blah';
import MovieList from './Movies';

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

function App() {
  return (
    <div className="App">
      <TopBanner websiteTitle="Riley's Website!" />
      <MovieList />
    </div>
  );
}

export default App;
