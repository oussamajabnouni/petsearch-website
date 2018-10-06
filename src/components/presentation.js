import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import appStore from '../assets/ios.png';
import playStore from '../assets/android.png'
import appShowcase from '../assets/app-showcase.png'

const Presentation = ({ title, description }) => (
  <section className='section is-hero'>
    <div className='container'>
      <div className='columns is-vcentered'>
        <div className='column is-6 is-5-fullhd is-offset-1-fullhd'>
          <div className='section-header'>
            <h1 className='title is-spaced'>{title}<span className='is-hidden-touch' /></h1>
            <h2 className='subtitle is-3'> {description}</h2>
            <div className='field is-grouped'>
              <a href="#" className='control'> <img src={appStore} width="150px" /></a>
              <a href="https://play.google.com/store/apps/details?id=com.infin.petsearch&hl=en" className='control'> <img src={playStore} width="170px" height="57px" /></a>
            </div>
            <hr className='spacer is-1-5' /><span>Pet owners's Choice Approved App</span></div>
        </div>
        <div className='column is-6'>
          <div className='section-media'>
            <img src={appShowcase} alt="" />
            <p> <small><a href=''><u>Showcase</u></a> of our android app.</small> </p>
          </div>
        </div>
      </div>
    </div>
  </section >
)

export default Presentation
