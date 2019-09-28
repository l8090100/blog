import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby'
import { Title } from './item.css';

const Item = ({ title, image }) => (
  <figure>
     <Link to={`/${title}/`}>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    </Link>
    <figcaption>
      <Title>{title}</Title>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
