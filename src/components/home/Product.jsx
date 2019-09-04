import React from 'react';
import Img from 'gatsby-image';
// import React, {useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
// import Foo from './images/foo.png';


// import Product from './Product.jsx';
// const Product = (props) => {
const Product = ({product}) => {

    // no refs

    // const [isOpen, setOpen] = useState(false);

    // const toggleNav = () => {
    //    setOpen(isOpen => !isOpen)
    // }
    
    const methodName = (e) => {
        //
    }

    return (
        <div className="col-10 col-sm-8 col-sm-6 col-lg-4 mx-auto my-3">
            <div    className="card"
                    style={{minHeight:'100%'}}>
                <Img    fluid={product.image.fluid}
                        className="card-img-top"/>
                <div className="card-body text-center">
                    <h6>{product.title}</h6>
                    <h6>${product.price}</h6>
                    <button className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
                            data-item-id={product.id}
                            data-item-name={product.title}
                            data-item-price={product.price}
                            data-item-image={product.image.fluid.src}
                            data-item-url="https://dwilbank-coffee.netlify.com/">
                        add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};


// Product.defaultProps = {};
// Product.propTypes = {
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

export default Product;


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