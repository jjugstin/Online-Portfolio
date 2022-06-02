import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio_mock.png'
import IMG2 from '../../assets/portfolio_library.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Mock Library Database',
    github: 'https://github.com/RodolfoChavez22/LIBRARYPROJECTFINAL',

  },
  {
    id: 2,
    image: IMG2,
    title: 'This Portfolio!',
    github: 'https://github.com',
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>What I've Done</h5>
      <h2>My Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio