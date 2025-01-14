import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Link } from 'gatsby-plugin-modal-routing'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'


class TagCardRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <div className="column is-one-third" >
          <div style={{ marginTop: `1rem` }}></div>
        <article className={`blog-list-item `}>
        <Link to={post.node.fields.slug} asModal>
        <div className="featured-thumbnail">
          <PreviewCompatibleImage
            imageInfo={{
              image: post.node.frontmatter.featuredimage,
              alt: `featured image thumbnail for post ${post.node.frontmatter.title}`,
            }}
          />
        </div>
        <div style={{ marginTop: `1rem` }}></div>
        <p className="is-size-5">{post.node.frontmatter.title}</p>
        </Link>
        </article>
      </div>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = ` ${tag} - ${totalCount} Post${
      totalCount === 1 ? '' : 's' 
    }  `

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
            <div className="container">
            <div style={{ marginTop: `4rem` }}>
              <div className="columns is-multiline  has-text-centered">
              <div className="column is-12" >
                <h3 className="title is-size-3 is-bold-light ">{tagHeader}</h3>
              </div>
                    {postLinks}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagCardRoute

export const tagCardPageQuery = graphql`
  query TagCardPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 10000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 240, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
