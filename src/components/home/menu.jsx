import React, { Component } from 'react';
import Title from '../globals/Title.jsx';
import Img from 'gatsby-image';
// import PropTypes from 'prop-types';
const getCategories = items => {
    let categories = items.map(item => item.node.category);
    categories = new Set(categories);
    return ['all', ...Array.from(categories)];
}
// import Menu from './Menu.jsx';
class Menu extends Component {
    
    constructor(props, context){
        super(props, context);
        this.state = {
            items: props.items.edges,
            filteredItems: props.items.edges,
            categories: getCategories(props.items.edges)
        }
    //    this.handleClick = this.handleClick.bind(this)
    }

    // handleClick(e) {
    //    
    //    this.setState(prevState => {
    //        return {}
    //    })
    // }
       
    /////////// ALTERNATIVE 1 - if using create-react-app

    // and you do not need to init the state based on props
    // state = { whatever: false };
        
    // no more constructor or 'this' binding required
    //
    handleItems = (category) => {
        let tempItems = [...this.state.items];
        if (category === 'all') {
            return this.setState(() => {return {filteredItems:tempItems}});
        }
        let items = tempItems.filter(({node}) => node.category === category);
        this.setState({filteredItems: items})
    //    this.setState(prevState => {
    //        return {}
    //    })
        
    }
    

    
    render() {
        if (this.state.items.length > 0) {
            return (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="best of our menu"/>
                            {/* categories */}
                            <div className="row mb-5">
                                <div className="col-10 mx-auto text-center">
                                    {this.state.categories.map((cat,i) => (
                                        <button type="button" key={i}
                                                className="btn btn-yellow text-capitalize m-3"
                                                onClick={() => this.handleItems(cat)}>
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {/* items */}
                        <div className="row ">
                            {this.state.filteredItems.map(({node}) => (
                                <div    key={node.id}
                                        className="col-11 col-md-6 my-3 d-flex mx-auto">
                                    <div>
                                        <Img fixed={node.image.fixed}/>
                                    </div>
                                    <div className="flex-grow-1 px-3">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="mb-0">
                                                <small>{node.title}</small>
                                            </h6>
                                            <h6 className="mb-0 text-yellow">
                                                <small>${node.price}</small>
                                            </h6>
                                        </div>
                                        <p className="text-muted">
                                            <small>{node.description.description}</small>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        } else {
            return (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="best of our menu"/>
                        <div className="row">
                            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                                <h1>there are no items to display</h1>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }

    }
}

// Menu.defaultProps = {};
// Menu.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

// Menu.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');

export default Menu;

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')
    
// }

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