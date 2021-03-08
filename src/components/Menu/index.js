/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

/* TODO: Remover restrições do eslint acima */
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faShoppingCart,
  faWindowClose,
} from '@fortawesome/free-solid-svg-icons'

import { getPathToRoute } from '../../routes'

import logo from '../../assets/img/logo.png'
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
      <FontAwesomeIcon icon={faBars} aria-hidden="true" />
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
        <FontAwesomeIcon icon={faWindowClose} aria-hidden="true" />
      </a>
      <ul>
        <li>
          {/* TODO: Adicionar rota para a página de produtos */}
          <a href="#">Produtos</a>
        </li>
        <li>
          {/* TODO: Adicionar rota para a página de quem somos */}
          <a href="#">Quem somos</a>
        </li>
        <li>
          {/* TODO: Adicionar rota para a página da loja */}
          <a href="#">Nossa loja</a>
        </li>
        <li>
          {/* TODO: Adicionar rota para a página do carrinho */}
          <a href="#">
            <FontAwesomeIcon icon={faShoppingCart} />
          </a>
        </li>
      </ul>
    </nav>
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
