import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo2.svg'


const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  // toggleHamburger = () => {
  //   // toggle the active boolean in the state
  //   this.setState(
  //     {
  //       active: !this.state.active,
  //     },
  //     // after state has been updated,
  //     () => {
  //       // set the class in state for the navbar accordingly
  //       this.state.active
  //         ? this.setState({
  //             navBarActiveClass: 'is-active',
  //           })
  //         : this.setState({
  //             navBarActiveClass: '',
  //           })
  //     }
  //   )
  // }

  render() {
    return (
      <nav
        className="navbar is-transparent is-fixed-top " //加上is-fixed-top才能固定nav在頂部
        role="navigation"
        aria-label="main-navigation"
      >
        {/* <div className="container"> */}
          <div className="navbar-brand">
            <Link to="/about" className="navbar-item" title="Logo">
              <img src={logo} alt="Bulma" width="70px" height="20px" />
            </Link>
            <Link className="navbar-item" to="/gallery">
                Gallery
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/tags">
                Tag
              </Link>
            {/* Hamburger menu */}
            {/* <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            > */}
              {/* <span />
              <span />
              <span /> */}
            </div>
          {/* </div> */}
          
        {/* </div> */}
      </nav>
    )
  }
}

export default Navbar
