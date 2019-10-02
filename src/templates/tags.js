import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Link } from 'gatsby-plugin-modal-routing'
import Layout from '../components/Layout'


class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <div className="column is-full" >
        <li key={post.node.fields.slug}>
          <Link to={post.node.fields.slug} asModal>
            <p className="is-size-5">{post.node.frontmatter.title}</p>
          </Link>
        </li>
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
        <section className="section clearfix">
          <Helmet title={`${tag} | ${title}`} />
            <div className="container">
            <div style={{ marginTop: `2rem` }}>
              <div className="columns is-multiline is-mobile">
                <div className="column is-12">
                  <h3 className="title is-size-3 is-bold-light has-text-centered">{tagHeader}</h3>
                </div> 
                  <div style={{ marginTop: `2rem` }}>  </div>   
                    <ul className="taglist">{postLinks}</ul>
                  <div style={{ marginBottom: `2rem` }}>  </div> 
                    {/* <div className="column is-12">
                  <p className="is-size-5 has-text-centered">
                    <Link to="/tags">All tags</Link>
                  </p>
                  </div> */}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
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
          }
        }
      }
    }
  }
`
