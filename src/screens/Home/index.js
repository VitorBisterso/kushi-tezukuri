import React from 'react'

import HomeCard from '../../components/HomeCard'

import background from '../../assets/img/bg.png'
import mask from '../../assets/img/mask.jpg'
import carpet from '../../assets/img/carpet.jpg'
import orders from '../../assets/img/orders.jpg'
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
    <div className="home-cards">
      <HomeCard title="Máscaras" image={mask} onClick={() => null} />
      <HomeCard title="Tapetes" image={carpet} onClick={() => null} />
      <HomeCard title="Encomendas" image={orders} onClick={() => null} />
    </div>
  </div>
)

export default Home
