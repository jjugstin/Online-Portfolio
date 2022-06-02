import React from 'react'
import './about.css'
import ABOUTME from '../../assets/about-me.png'
import {MdOutlineSchool} from 'react-icons/md'
import {AiOutlineProject} from 'react-icons/ai'
import {MdWorkOutline} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
        <h5>Who I</h5>
        <h2>Am</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ABOUTME} alt="About Me Image" />
            </div> 
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <MdOutlineSchool className='about__icon' />
                <h5>What I'm Up To</h5>
                <small>Pursuing a B.S. in Computer Science at University of Houston!</small>
              </article>
              <article className='about__card'>
                <AiOutlineProject className='about__icon' />
                <h5>Projects</h5>
                <small>I have 2 personal projects completed so far!</small>
              </article>
              <article className='about__card'>
                <MdWorkOutline className='about__icon' />
                <h5>What I'm Up To</h5>
                <small>I am currently a lead instructor at Coder Kids!</small>
              </article>
            </div>

            <p>
              Hello! My name's Justin and I am a student at University of Houston pursuing a Bachelor's Degree in Computer Science.
              I am currently looking for internship opportunities, remote or in the Houston area, as I want to showcase the skills
              I have accumulated throughout my 5+ year coding journey.
            </p>

            <a href="#contact" className='btn btn-primary'>Contact Me!</a>
          </div>
        </div>
      </section>
  )
}

export default About