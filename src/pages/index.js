import { graphql, Link } from "gatsby"
import React from "react"
import Container from "../components/landingContainer"
import SEO from "../components/seo"



class BlogIndex extends React.Component {
  render() {
    // const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    // const posts = data.allContentfulPost.edges

    return (
      <Container>
        <SEO title="Trinity Oaks Farms" />
        <section className="hero">
          <h1>Trinity Oaks Farms</h1>

          <div className="social-links">T F L Y</div>

          <div className="blog-tile">
            <div className="recent-post">MOST RECENT POST (and link)</div>
            <span>Checkout our <Link to="/blog/">blog</Link>!</span>
          </div>

          <div className="store-tile">
            <img src="../../content/assets/barn.jpg" alt="Yummy eggs picture " />
            <span>Farm Fresh</span>
          </div>
        </section>

      </Container>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost {
      edges {
        node {
          title
          subtitle
          author
          slug
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
