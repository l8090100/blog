import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div style={{ marginTop: `4rem` }}></div>
        {/* <div className="column is-12  ">
            <h3 className="has-text-centered is-size-2">BLOG</h3>
        </div> */}
        <section className="section">
           <div className="container">
            <BlogRoll />          
          </div>
        </section>
      </Layout>
    )
  }
}
