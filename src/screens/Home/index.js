import React from 'react'

import HomeCard from '../../components/HomeCard'

import background from '../../assets/img/bg.png'
import mask from '../../assets/img/mask.jpg'
import carpet from '../../assets/img/carpet.jpg'
import towel from '../../assets/img/plateTowel.png'
import './styles.css'

const Home = () => (
  <div className="home-container">
    <div className="home-textImageContainer">
      <p className="home-textImage">
        Produtos para você que procura
        <br />
        por <b>beleza e conforto</b>
      </p>
      <img className="home-backgroundImage" src={background} alt="background" />
    </div>
    <div className="home-whatWeOffer">
      <p className="home-whatWeOfferTitle">O que oferecemos</p>
      <div className="home-cards">
        <HomeCard title="Máscaras" image={mask} onClick={() => null} />
        <HomeCard title="Tapetes" image={carpet} onClick={() => null} />
        <HomeCard title="Jogo Americano" image={towel} onClick={() => null} />
      </div>
    </div>
  </div>
)

export default Home
