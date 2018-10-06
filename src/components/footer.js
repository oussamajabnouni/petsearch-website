/**
 * Created by oussamajabnouni
 */
import React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/logo.jpg'
import appStore from '../assets/ios.png';
import playStore from '../assets/android.png'

import { Facebook, Twitter } from 'react-feather';

const Footer = () => {
    return (
        <footer class="app-footer section is-medium">
            <div class="container">
                <div class="columns">
                    <div class="column is-5 is-4-widescreen">
                        <div class="summary">
                            <a class="brand" href="/">
                                <div class="brand-icon">
                                    <img src={logo} />
                                </div>
                                <div class="brand-content">
                                    <div class="brand-title"> Petsearch </div>
                                    <div class="brand-subtitle"> Find. Adopt. Pamper </div>
                                </div>
                            </a>
                            <hr class="spacer is-1" />
                            <p> Petsearch is a one of a kind, unique application for pet lovers and pet owners alike. </p>
                            <hr class="spacer is-1" />
                            <div className='field is-grouped'>
                                <a href="#" className='control'> <img src={appStore} width="150px" /></a>
                                <a href="https://play.google.com/store/apps/details?id=com.infin.petsearch&hl=en" className='control'> <img src={playStore} width="170px" height="57px" /></a>
                            </div>
                            <hr class="spacer is-1" /><a href="http://www.petsearch.info" target="_blank"> © Petsearch</a> </div>
                    </div>
                    <div class="column is-7 is-6-widescreen is-offset-2-widescreen">
                        <div class="columns">
                            <div class="column is-offset-4 is-4">
                                <div class="menu">
                                    <p class="menu-label">Links</p>
                                    <ul class="menu-list">
                                        <li> <Link to="/about">About</Link> </li>
                                        <li> <Link to="/careers">Careers</Link> </li>
                                        <li> <Link to="/contact-us">Contact</Link> </li>
                                        <li> <Link to="/blog">Blog</Link> </li>
                                        <li> <Link to="/">Privacy policy</Link> </li>
                                        <li> <Link to="/">Terms & conditions</Link> </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="column is-4">
                                <div class="menu">
                                    <p class="menu-label"> Connect with us </p>
                                    <ul class="menu-list">
                                        <li>
                                            <a href="#" target="_blank"><Facebook /> Facebook</a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><Twitter /> Twitter</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
