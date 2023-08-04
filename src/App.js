import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
import { useEffect } from 'react';


const App = () => {
  const [country, setCountry] = useState('in');
  const apikey = '54112e1e7e6b4861803b822f056a02c0';
  // The below is used for top loading bar
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setCountry('in')
  }, [])
  let handleCountry = (par1) => {
    setCountry(par1)
    // console.log(country)
  }
  return (
    <Router>
      <LoadingBar
        color='red'
        progress={progress}
        height={2}
      />
      <Navbar handleCo={handleCountry} />
      < Routes>
        <Route exact path='/' element={<News setProgress={setProgress} key="Home" title='News' pageSize={7} country={country} category='general' apikey={apikey} />}></Route>
        <Route exact path='/business' element={<News setProgress={setProgress} key="business" title='News' pageSize={7} country={country} category='business' apikey={apikey} />}></Route>
        <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" title='News' pageSize={7} country={country} category='entertainment' apikey={apikey} />}></Route>
        <Route exact path='/health' element={<News setProgress={setProgress} key="health" title='health' pageSize={7} country={country} category='health' apikey={apikey} />}></Route>
        <Route exact path='/science' element={<News setProgress={setProgress} key="science" title='science' pageSize={7} country={country} category='science' apikey={apikey} />}></Route>
        <Route exact path='/sports' element={<News setProgress={setProgress} key="sports" title='sports' pageSize={7} country={country} category='sports' apikey={apikey} />}></Route>
        <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" title='technology' pageSize={7} country={country} category='technology' apikey={apikey} />}></Route>
      </Routes>
    </Router>
  )

}

export default App