import React from 'react'
import PropTypes from 'prop-types'
import Item from '../gallery/item/item'
import { Container } from '../gallery/gallery.css'

const Gallery = ({ items }) => (
  <Container >
      <div className="columns is-multiline is-mobile">
        {items.map((item, i) => (
          <Item {...item} key={i} />
        ))}
        </div>
  </Container>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
