import React from 'react'
import './HomeScreen.css';
import Navbar from './Navbar';
import Banner from './Banner';
import Row from './Row';
import requests from '../api/request';

const HomeScreen = () => {
  return (
    <div className='homescreen'>
      <Navbar/>
      <Banner/>

      {/* Row */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow={false}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow={false}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow={false}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorroeMovies} isLargeRow={false}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow={false}/>
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} isLargeRow={false}/>
    </div>
  )
}

export default HomeScreen
