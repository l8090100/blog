import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Gallery from '../components/gallery/gallery'



export const GalleryPageTemplate = ({
  title,
  heading,
  description,
  intro,
}) => {
    return (
      <section className="section">
        <div style={{ marginTop: `4rem` }}>
          <div className="container">
            {/* <div className="columns has-text-centered">
                <div className="column is-12  ">
                  <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
                  <div style={{ marginTop: `1rem` }}></div>
                  <p>{description}</p>
                </div>
            </div> */}
            <div className="columns is-mobile has-text-centered">
              <div className="column has-text-centered">
                    <Gallery items={intro.blurbs} />
              </div>     
            </div>
          </div>
        </div>
      </section>
    );
  }

GalleryPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const GalleryPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <GalleryPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

GalleryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default GalleryPage

export const GalleryPageQuery = graphql`
  query GalleryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 400,  quality: 100) {
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
