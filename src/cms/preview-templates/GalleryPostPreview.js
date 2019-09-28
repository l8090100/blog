import React from 'react'
import PropTypes from 'prop-types'
import { GalleryPostTemplate } from '../../templates/gallery-post'

const GalleryPostPreview = ({ entry, widgetFor }) => (
  <GalleryPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

GalleryPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default GalleryPostPreview
