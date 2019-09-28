import React from 'react'

import Layout from '../../components/Layout'
import GalleryRoll from '../../components/GalleryRoll'

export default class GalleryIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-2"
          style={{
            backgroundImage: `url('/img/blog1.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-2"
            style={{
              color: 'white',
              padding: '1rem',
            }}
          >
            All Kinds
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <GalleryRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
