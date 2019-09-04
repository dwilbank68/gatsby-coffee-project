import React, { Component } from 'react';
import {Link} from 'gatsby';
import logo from '../../images/logo.svg';
import {FaCartArrowDown} from 'react-icons/fa';
// import PropTypes from 'prop-types';

// import NavBar from './NavBar.jsx';
class NavBar extends Component {

    // constructor(props, context){
    //     super(props, context);
    //     this.state = {
    //         whatever:{}
    //     }
    //    this.handleClick = this.handleClick.bind(this)
    // }
    state = {
        navBarOpen: false,
        css:'collapse navbar-collapse',
        links: [
            {id:1, path:'/', text:'home'},
            {id:2, path:'/about', text:'about'}
        ]
    }
    navbarHandler = (e) => {
       if (this.state.navBarOpen) {
            this.setState({
                navBarOpen: false,
                css: "collapse navbar-collapse"
            })
       } else {
            this.setState({
                navBarOpen: true,
                css: "collapse navbar-collapse show"
            })
       }
    }

    /////////// ALTERNATIVE 1 - if using create-react-app

    // and you do not need to init the state based on props
    // state = { whatever: false };

    // no more constructor or 'this' binding required
    //
    // handleClick = (e) => {
    //    this.setState(prevState => {
    //        return {}
    //    })
    // }




    render() {
        return (
            <nav    className="navbar navbar-expand-sm bg-light navbar-light">
                <Link to='/' className="navbar-brand">
                    <img src={logo} alt="logo"/>
                    {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/webalys */}
                </Link>
                <button className="navbar-toggler"
                        type="button"
                        onClick={this.navbarHandler}>
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className={this.state.css}>
                    <ul className="navbar-nav mx-auto">
                        {this.state.links.map((l, i) => (
                            <li key={l.id} className="nav-item">
                                <Link to={l.path} className="nav-link text-capitalize">
                                    {l.text}
                                </Link>
                            </li>
                        ))}
                        <li className="nav-item ml-sm-5">
                            <FaCartArrowDown className="cart-icon snipcart-checkout"/>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

// NavBar.defaultProps = {};
// NavBar.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

// NavBar.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');

export default NavBar;

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