import React from 'react'

import githubIcon from '../../assets/img/github.svg'
import instagramIcon from '../../assets/img/instagram.svg'
import adminIcon from '../../assets/img/admin.svg'

import './styles.css'

const Footer = () => (
  <div className="footer-container">
    <a href="https://github.com/VitorBisterso/kushi-tezukuri">
      <img src={githubIcon} alt="github-icon-footer" />
    </a>
    <a href="https://www.instagram.com/kushi_tezukuri/">
      <img src={instagramIcon} alt="instragram-icon-footer" />
    </a>
    {/* TODO: Adicionar rota para página de adm */}
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#">
      <img src={adminIcon} alt="admin-icon-footer" />
    </a>
  </div>
)

export default Footer
