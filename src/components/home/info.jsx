import React from 'react';
// import { Link, graphql } from "gatsby";
import { Link } from "gatsby";
import Title from '../globals/Title.jsx';

const Info = () => {
    
    return (
        <section    className="py-5">
            <div className="container">
                <Title title="our story"/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos officia vel at voluptas accusantium qui distinctio. Quod, cumque soluta reprehenderit recusandae culpa mollitia architecto quaerat.
                        </p>
                        <Link to="/about/">
                            <button className="btn text-uppercase btn-yellow">
                                about page
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Info;