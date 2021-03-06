import React from 'react';
import "./HomeScreen.css";
import Banner from "../Banner.js";
import Nav from "../Nav.js";
import requests from "../Requests";
import Row from "../Row.js";

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />
        
  
            <Banner />

            <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title='Trending Now' fetchUrl={requests.fetchTrending}  />
            
            <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}  />
            <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} isLargeRow />
            <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}  />
            <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
        </div>
    )
}

export default HomeScreen
