import React from 'react';
// import React, {useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
// import Foo from './images/foo.png';


// import Footer from './Footer.jsx';
// const Footer = (props) => {
const Footer = ({whatever1, whatever2}) => {

    // no refs

    // const [isOpen, setOpen] = useState(false);

    // const toggleNav = () => {
    //    setOpen(isOpen => !isOpen)
    // }
    
    const methodName = (e) => {
        //
    }

    return (
        <footer    className="footer py-3">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
                        <h3>all rights reserved &copy; {new Date().getFullYear().toString()}</h3>
                    </div>
                </div>
            </div>
        </footer>
    );
};


// Footer.defaultProps = {};
// Footer.propTypes = {
//     name:        PropTypes.string.isRequired,
//     hndleIptChg: PropTypes.func,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({
//          title: PropTypes.string.isRequired,
//          text: PropTypes.string.isRequired
//     }).isRequired,
//     comments:    PropTypes.arrayOf(PropTypes.object),
//     todos:       PropTypes.array,
//     isComplete:  PropTypes.bool,
//     id:          PropTypes.number,
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

export default Footer;


///////////////////////////////////// BACKGROUND IMAGE /////////////////////////////////////

// import Foo from './images/foo.png';

// style={{background:`white url(${Foo})`}}


///////////////////////////////////// REACT-REVEAL EFFECT /////////////////////////////////////

// import Fade from 'react-reveal/Fade.js';
// import Slide from 'react-reveal/Slide.js';
// import Zoom from 'react-reveal/Zoom.js';

// <Fade delay={500}>...</Fade>
// <Slide left delay={1000}>...</Slide
// <Zoom delay={foo.delay}>...</Zoom>