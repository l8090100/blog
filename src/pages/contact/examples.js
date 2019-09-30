import React from 'react'
import Link from 'gatsby-link'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
            <div style={{ marginTop: `4rem` }}> </div>
              <h1>Hi people</h1>
              <p>
                This is an example site integrating Netlify’s form handling with
                Gatsby
              </p>
              <ul>
                <li>
                  <Link to="/contact">Basic contact form</Link>
                </li>
                <li>
                  <Link to="/contact/file-upload/">Form with file upload</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
