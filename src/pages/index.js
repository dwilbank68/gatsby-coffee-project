import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/globals/BackgroundSection.jsx';
import Info from '../components/home/info.jsx'
import Menu from '../components/home/menu.jsx'
import ProductList from '../components/home/ProductList';
import Contact from '../components/home/contact';

export const query = graphql`
{

    img:file(relativePath:{eq:"default-background.jpeg"}) {
        childImageSharp{
            fluid {
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }

    menu:allContentfulCoffeeItem {
        edges	{
            node {
                category id title price
                description { description }
                image {
                    fixed(width:50, height:50) {
                        ...GatsbyContentfulFixed_tracedSVG
                    }
                }
            }
        }
    }

}
`

const IndexPage = ({data}) => (
    <Layout>
        <SEO title="Home" />
        <BackgroundSection  img={data.img.childImageSharp.fluid}
                            title="regular joe's"
                            styleClass="default-background"/>
        <Info/>
        <Menu items={data.menu}/>
        <ProductList/>
        <Contact/>
    </Layout>
)



export default IndexPage
