import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/globals/BackgroundSection.jsx';
import Info from '../components/home/info.jsx'

export const query = graphql`
{
    img:file(relativePath:{eq:"about-background.jpeg"}) {
        childImageSharp{
            fluid {
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
}
`

const AboutPage = ({data}) => (
    <Layout>
        <SEO title="Home" />
        <BackgroundSection  img={data.img.childImageSharp.fluid}
                            title="about us"
                            styleClass="about-background"/>
        <Info/>
    </Layout>
)



export default AboutPage
