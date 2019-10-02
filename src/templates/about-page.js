import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import facebook from '../img/social/facebook.svg'
import github from '../img/github-icon.svg'
import contact from '../img/contact-icon.svg'
import uploadfile from '../img/uploadfile-icon.svg'

export const AboutPageTemplate = ({ image,title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
    <div
      className="full-width-image margin-top-"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `center`,
        backgroundAttachment: `flex`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '120px',
          lineHeight: '3',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div style={{ marginTop: `2rem` }}></div>
        <h1
          className="has-text-centered is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: 'white',
            lineHeight: '3',
            padding: '0.2em',
          }}
        >
          {title}
        </h1>
        <div className="column is-12 has-text-centered ">
         <Link to="/contact">
         <img
             src={contact}
             alt="contact"
             style={{ width: '4em', height: '3em' }}
           />
         </Link>
         <Link  to="/contact/file-upload/">
         <img
             src={uploadfile}
             alt="uploadfile"
             style={{ width: '4em', height: '3em' }}
           />
         </Link> 
         <a title="facebook" href="https://facebook.com/chengchingen">
           <img
             src={facebook}
             alt="Facebook"
             style={{ width: '4em', height: '3em' }}
           />
         </a>
         <a title="github" href="https://github.com/l8090100">
           <img
             src={github}
             alt="github"
             style={{ width: '4em', height: '3em' }}
           />
         </a>   
         </div>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light has-text-centered">
                About Me
              </h2>

              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
