/**
 * Created by oussamajabnouni
 */
import React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/logo.jpg'

const Header = () => {
    return (
        <header className='app-header'>
            <title>Petsearch</title>
            <meta name='description' content='petsearch' />
            <nav className='navbar is-fixed-top is-small'>
                <div className='container'>
                    <div className='navbar-brand'>
                        <div className='navbar-item'>
                            <a className='brand' href='/'>
                                <div className='brand-icon'>
                                    <img alt='Petsearch' role='presentation' src={logo} />
                                </div>
                                <div className='brand-content'>
                                    <div className='brand-title'>
                                        Petsearch
                                     </div>
                                    <div className='brand-subtitle'> Find. Adopt. Pamper </div>
                                </div>
                            </a>
                        </div>
                        <div className='navbar-burger burger' data-target='mainNav'>
                            <span /><span /><span /> </div>
                    </div>
                    <div className='navbar-menu' id='mainNav'>
                        <div className='navbar-end'>
                            <Link className='navbar-item' activeClassName="is-active" to="/">Home</Link>
                            <Link className='navbar-item' activeClassName="is-active" to="/blog">Blog</Link>
                            <Link className='navbar-item' activeClassName="is-active" to="/about">About</Link>
                            <Link className='navbar-item' activeClassName="is-active" to="/careers">Careers</Link>
                            <Link className='navbar-item' activeClassName="is-active" to="/contact-us">Contact Us</Link>
                            <Link className='navbar-item' activeClassName="is-active" to="/partner-with-us">Partner with us</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
