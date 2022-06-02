import React from 'react'
import './footer.css'
import {FiGithub} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {AiOutlineLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>BACK TO TOP</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/jjugstin"><FiGithub/></a>
        <a href="https://www.instagram.com/jugstin/"><FiInstagram/></a>
        <a href="https://www.linkedin.com/in/justin-jose-714173149/"><AiOutlineLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer