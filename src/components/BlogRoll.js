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
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="column is-4" key={post.id}>
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary  margin-top-2 is-size-5"
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
                        <br />
                      {post.frontmatter.title}
                    </Link>             
                  </p>
                  <div style={{ marginTop: `1rem` }}></div>
                <p>
                  {post.frontmatter.description}
                  <br />
                  <br />
                  {/* <span className="subtitle is-size-6 is-block">
                      {post.frontmatter.date}
                  </span>
                  <br /> */}
                </p>
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
                date(formatString: "MM.DD, YYYY")
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
