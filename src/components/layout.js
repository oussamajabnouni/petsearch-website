/**
 * Created by oussamajabnouni
 */
import React from 'react'
import Header from './header'
import Footer from './footer'

const TemplateWrapper = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
