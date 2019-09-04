import React from "react"
import PropTypes from "prop-types"
import NavBar from './globals/NavBar.jsx';
import Footer from './globals/Footer.jsx';
import "./layout.css"
import "./bootstrap.min.css"

const Layout = ({ children }) => {


  return (
    <>
        <NavBar/>
        {children}
        <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
