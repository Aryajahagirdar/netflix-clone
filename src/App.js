import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
    <Nav />
    <Banner />
    <Row title = "NETFLIX ORIGINALS" fetchURL = {requests.fetchNetflixOriginals} isLargeRow="true"/>
    <Row title = "Trending Now" fetchURL = {requests.fetchTrending}/>
    <Row title = "Drama Movies" fetchURL = {requests.fetchDramaMovies}/>
    <Row title = "Comedy Movies" fetchURL = {requests.fetchComedyMovies}/>
    <Row title = "Romance Movies" fetchURL = {requests.fetchRomanceMovies}/>
    <Row title = "Action Movies" fetchURL = {requests.fetchActionMovies}/>
    <Row title = "Horror Movies" fetchURL = {requests.fetchHorrorMovies}/>
    </div>
  );
}

export default App;
