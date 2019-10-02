import React from 'react'
import { Link } from 'gatsby-plugin-modal-routing'
import facebook from '../img/social/facebook.svg'
import github from '../img/github-icon.svg'
import contact from '../img/contact-icon.svg'
import uploadfile from '../img/uploadfile-icon.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer bottom-fixed has-background-black has-text-white-ter">
        {/* <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '3em' }}
          />
        </div> */}
          <div className="container has-text-centered has-background-black has-text-white-ter">
            <div className="columns is-multiline is-mobile">
              <div className="column is-12 ">
                      <Link to="/contact">
                      <img
                          src={contact}
                          alt="contact"
                          style={{ width: '4em', height: '2em' }}
                        />
                      </Link>
                      <Link  to="/contact/file-upload/">
                      <img
                          src={uploadfile}
                          alt="uploadfile"
                          style={{ width: '4em', height: '2em' }}
                        />
                      </Link> 
                      <a title="facebook" href="https://facebook.com/chengchingen">
                        <img
                          src={facebook}
                          alt="Facebook"
                          style={{ width: '4em', height: '2em' }}
                        />
                      </a>
                      <a title="github" href="https://github.com/l8090100">
                        <img
                          src={github}
                          alt="github"
                          style={{ width: '4em', height: '2em' }}
                        />
                      </a>   
              </div>   

              {/* <div className="column is-1">
                <section>
                  <ul className="menu-list">
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div> */} 
              {/* <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="github" href="https://facebook.com">
                  <img
                    src={github}
                    alt="github"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div> */}
            </div>
          </div>
      </footer>
    )
  }
}

export default Footer
