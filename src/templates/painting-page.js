import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Gallery from '../components/gallery/gallery'


export const PaintingPageTemplate = ({
  title,
  heading,
  description,
  intro,
}) => {
    return (
      <section className="section">
        <div style={{ marginTop: `4rem` }}>
          <div className="container">
            <div className="columns">
                <div className="column is-7 is-offset-1 ">
                  <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
                  <p>{description}</p>
                </div>
            </div>
            <div className="columns is-multiline is-mobile has-text-centered">
              <div className="column has-text-centered">
                    <Gallery items={intro.blurbs} />
              </div>     
            </div>
          </div>
        </div>
      </section>
    );
  }

PaintingPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

}

const PaintingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <PaintingPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        fullImage={frontmatter.full_image}
      />
    </Layout>
  )
}

PaintingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PaintingPage

export const PaintingPageQuery = graphql`
  query PaintingPage($id: String!) {
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
                fluid(maxWidth: 240, maxHeight: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        } 
        full_image {
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
