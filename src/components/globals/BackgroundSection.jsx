import React from 'react';
// import React, {useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
// import Foo from './images/foo.png';


// import BackgroundSection from './BackgroundSection.jsx';
// const BackgroundSection = (props) => {
const BackgroundSection = ({img, styleClass, title, children}) => {

    // no refs

    // const [isOpen, setOpen] = useState(false);

    // const toggleNav = () => {
    //    setOpen(isOpen => !isOpen)
    // }
    
    const methodName = (e) => {
        //
    }

    return (
        <BackgroundImage    className={styleClass}
                            fluid={img}>
            <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
                {title}
            </h1>
            {children}
        </BackgroundImage>
    );
};


BackgroundSection.defaultProps = {
    title:"default title",
    styleClass:"default-background"
};
// BackgroundSection.propTypes = {
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

export default BackgroundSection;


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