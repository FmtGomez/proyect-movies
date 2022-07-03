import React from 'react'
import { Main } from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

export const Home = () => {
  return (
    <div>
        <Main/>
        <Row rowID="1" title = "Proximamente" fetchURL={requests.requestUpcoming}/>
        <Row rowID="2" title = "Popular" fetchURL={requests.requestPopular}/>
        <Row rowID="3" title = "Tendencia" fetchURL={requests.requestTrending}/>
        <Row rowID="4" title = "Top" fetchURL={requests.requestTopRated}/>
        <Row rowID="5" title = "Terror" fetchURL={requests.requestHorror}/>
    </div>
  )
}
