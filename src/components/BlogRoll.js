import React from 'react'
import PropTypes from 'prop-types'
import {  graphql, StaticQuery } from 'gatsby'
import { Link } from 'gatsby-plugin-modal-routing'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline ">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="column is-4" key={post.id}>
              <article className={`blog-list-item box `}>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
                  <div  className="post-meta">
                    <Link
                      className="title has-text-primary  is-size-5"
                      to={post.fields.slug} asModal
                    >
                      {post.frontmatter.featuredimage ? (
                        <div className="featured-thumbnail">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: post.frontmatter.featuredimage,
                              alt: `featured image thumbnail for post ${post.title}`,
                            }}
                          />
                        </div>
                      ) : null}
                      </Link> 
                      
                  </div >
                  <div style={{ marginTop: `0.5rem` }}></div>
                  <div className="container">    
                      <div className="columns  is-mobile">
                        <div className="column is-10 is-mobile">
                          <Link className="title has-text-primary  is-size-5" to={post.fields.slug} asModal>
                          <p class="bd-notification is-primary">{post.frontmatter.title}</p>
                          </Link> 
                        </div>
                        <div className="column  is-mobile">                 
                        {post.frontmatter.date}
                        </div>
                      </div>   
                  </div>
                  <div style={{ marginTop: `0.4rem` }}></div>
                  {post.frontmatter.description}
                 
                </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                description
                date(formatString: "DD.MM")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 300, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
