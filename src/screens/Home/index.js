import React from 'react'
import Fade from 'react-reveal/Fade'

import HomeCard from '../../components/HomeCard'

import background from '../../assets/img/bg.png'
import mask from '../../assets/img/mask.jpg'
import carpet from '../../assets/img/carpet.jpg'
import towel from '../../assets/img/plateTowel.png'

import './styles.css'

const Home = () => (
  <div className="home-container">
    <div className="home-textImageContainer">
      <Fade top>
        <p className="home-textImage">
          Produtos para você que procura
          <br />
          por <b>beleza e conforto</b>
        </p>
      </Fade>
      <img className="home-backgroundImage" src={background} alt="background" />
    </div>
    <div className="home-whatWeOffer">
      <p className="home-whatWeOfferTitle">O que oferecemos</p>
      <div className="home-cards">
        <Fade left>
          <HomeCard title="Máscaras" image={mask} onClick={() => null} />
          <HomeCard title="Tapetes" image={carpet} onClick={() => null} />
          <HomeCard title="Jogo Americano" image={towel} onClick={() => null} />
        </Fade>
      </div>
    </div>
  </div>
)

export default Home
