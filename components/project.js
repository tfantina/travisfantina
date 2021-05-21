import React from 'react'
import Photo from '../components/photo'
import { InlineTextarea, BlocksControls } from 'react-tinacms-inline'

export function Project({}) {
  return (
    <div className='project paper'>
    <div className="row">
      <div className="col-6">
      <h2>
        <InlineTextarea name='headline' />
      </h2>
      <InlineTextarea name='subtext' />
      </div>
      <div className="col-6">
      <Photo name="defaultItem"/>
      </div>
      </div>
    </div>
  )
}

export const projectBlock = {
  Component: ({ index }) => (
    <BlocksControls index={index}>
      <Project />
    </BlocksControls>
  ),
  template: {
    label: 'Project',
    defaultItem: {
      headline: 'Project 1',
      subtext: 'Something ok',
      photo_src: '/photo.jpg',
      photo_alt: 'alttext'
    },
    fields: []
  }
}
