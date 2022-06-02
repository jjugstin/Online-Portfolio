import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FiGithub} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/justin-jose-714173149/" target="_blank"><AiOutlineLinkedin /></a>
        <a href="https://github.com/jjugstin" target="_blank"><FiGithub /></a>
        <a href="https://www.instagram.com/jugstin/" target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials