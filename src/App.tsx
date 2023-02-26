import React from 'react';
import "./App.scss";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MovieDetail from './components/movieDetail/movieDetail';
import PageNotFound from './components/pageNotFound/pageNotFound';
import Home from './components/home/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
        <BrowserRouter>
        <Header />
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/movie/:imdbID" element={<MovieDetail />}/>
                <Route path="*" element={<PageNotFound />}/>
            </Routes>
        </div>
        <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
