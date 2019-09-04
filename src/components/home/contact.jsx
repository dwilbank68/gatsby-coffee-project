import React from 'react';
import Title from '../globals/Title.jsx';

// import Contact from './Contact.jsx';
// const Contact = (props) => {
const Contact = ({whatever1, whatever2}) => {

    return (
        <section className="contact py-5">
            <Title title="contact us"/>
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 mx-auto">
                    <form   action="https://formspree.io/dwilbank@gmail.com"
                            method="POST">
                        
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input  type="text" className="form-control"
                                    name="name" id="name" placeholder="john smith"/>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input  type="email" className="form-control"
                                    name="email" id="email" placeholder="email@example.com"/>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea   name="description" id="description" rows="5"
                                        className="form-control" placeholder="description">

                            </textarea>
                        </div>

                        <button className="btn btn-yellow btn-block text-capitalize mt-5">
                            Submit
                        </button>
                                        
                    </form>
                </div>
            </div>
        </section>
    );
};


// Contact.defaultProps = {};
// Contact.propTypes = {
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
// PropTypes -> array, bool, func, number, object, sContact
export default Contact;