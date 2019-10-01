import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash'
import Img from 'gatsby-image';
import { Link } from 'gatsby'
// import { Link } from 'gatsby-plugin-modal-routing'
import { Title } from './item.css';

const Item = ({ title, image }) => (
<div className="column is-4">

    {/* <Link to={`/tags-card/${kebabCase(title)}/`} asModal>   */}
    <Link to={`/tags-card/${kebabCase(title)}/`}>      
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    </Link> 
    <figcaption>
      <Title>{title}</Title>
    </figcaption>

</div>

);

Item.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
