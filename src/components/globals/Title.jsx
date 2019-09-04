import React from 'react';
import { Link, graphql } from "gatsby"
// import React, {useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
// import Foo from './images/foo.png';

// grab a file from /src/images - if it is for a background, use fluid
// export const query = graphql`
// {
//     img:file(relativePath:{eq:"default-background.jpeg"}) {
//         childImageSharp{
//             fluid {
//                 ...GatsbyImageSharpFluid_tracedSVG
//             }
//         }
//     }
// }
// `

const Title = ({title}) => {
    

    return (
        <div    className="row">
            <div className="col text-center mb-3">
                <h1 className="display-4 text-capitalize font-weight-bold">
                    {title}
                </h1>
            </div>
        </div>
    );
};


// Title.defaultProps = {};
// Title.propTypes = {
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

export default Title;


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