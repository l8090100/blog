import React from 'react'
import PropTypes from 'prop-types'
import {  graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  content,
  contentComponent,
}) => {
  const PostContent = contentComponent || Content
  return(
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top center`,
        backgroundAttachment: `flex`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '100px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1
          className=" is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>

      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                {/* <div className="content">
                  <div className="tile is-6">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile is-6">
                    <h3 className="subtitle ">{mainpitch.description}</h3>
                  </div>
                </div> */}
                <div className="columns">
                  <div className="column is-12">

                    <PostContent className="content" content={content} />
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
              }

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,

}

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <IndexPageTemplate
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {       
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
