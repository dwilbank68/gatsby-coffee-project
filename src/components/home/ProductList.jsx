import React from 'react';
import {StaticQuery, graphql} from 'gatsby';

import Product from './Product';
import Title from '../globals/Title.jsx';
// import React, {useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
// import Foo from './images/foo.png';


// import Products from './Products.jsx';
// const Products = (props) => {
const Products = ({whatever1, whatever2}) => {

    // no refs

    // const [isOpen, setOpen] = useState(false);

    // const toggleNav = () => {
    //    setOpen(isOpen => !isOpen)
    // }
    
    const query = graphql`
    {
        products:allContentfulCoffeeItemProduct {
            edges {
              node {
                id title price
                image {
                  fluid(maxHeight:426){
                      src
                    ...GatsbyContentfulFluid_tracedSVG
                  }
                }
              }
            }
          }
    }
    `

    const renderFn = data => (
        <section className="py-5">
            <div className="container">
                <Title title="our products"/>
                <div className="row">
                    {data.products.edges.map(({node}) => (
                        <Product product={node} key={node.id}/>
                    ))}
                </div>
            </div>
        </section>
    )

    return (
        <StaticQuery    query={query}
                        render={renderFn}/>
    );
};


// Products.defaultProps = {};
// Products.propTypes = {
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

export default Products;


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