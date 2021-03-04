import React from 'react'

import background from '../../assets/img/bg.png'

import './styles.css'

const Home = () => (
  <div className="home-container">
    <div className="home-textImageContainer">
      <p className="home-textImage">
        Produtos para você que procura
        <br />
        por <b>beleza e conforto</b>
      </p>
    </div>
    <img className="home-backgroundImage" src={background} alt="background" />
  </div>
)

export default Home
