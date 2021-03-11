import React from 'react'
import { Link } from 'react-router-dom'

import { getPathToRoute } from '../../routes/routes'

import logo from '../../assets/img/logo.png'
import barsIcon from '../../assets/img/bars.svg'
import closeIcon from '../../assets/img/close.svg'

import './styles.css'

const Menu = () => (
  <div className="menu-container">
    <a
      href="#main-menu"
      id="main-menu-toggle"
      className="menu-toggle"
      aria-label="Open main menu"
    >
      <span className="sr-only">Open main menu</span>
      <img
        className="menu-svgBarsIcon"
        src={barsIcon}
        alt="bars-menu-icon"
        aria-hidden="true"
      />
    </a>

    <Link className="menu-titleLink" to={getPathToRoute('home')}>
      <img className="menu-logo" src={logo} alt="logo" />
      <p className="menu-titleLogo">Kushi Tezukuri</p>
    </Link>

    <nav id="main-menu" className="main-menu" aria-label="Main menu">
      <a
        href="#main-menu-toggle"
        id="main-menu-close"
        className="menu-close"
        aria-label="Close main menu"
      >
        <span className="sr-only">Close main menu</span>
        <img
          className="menu-svgCloseIcon"
          src={closeIcon}
          alt="close-menu-icon"
          aria-hidden="true"
        />
      </a>
      <ul>
        <li>
          <Link to={getPathToRoute('products')}>Produtos</Link>
        </li>
        <li>
          <Link to={getPathToRoute('about')}>Quem somos</Link>
        </li>
        <li>
          <Link to={getPathToRoute('ourStore')}>Nossa loja</Link>
        </li>
        <li>
          <Link to={getPathToRoute('cart')}>Carrinho</Link>
        </li>
      </ul>
    </nav>
    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
    <a
      href="#main-menu-toggle"
      className="backdrop"
      tabIndex="-1"
      aria-hidden="true"
      hidden
    />
  </div>
)

export default Menu
