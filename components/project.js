import React from 'react'
import { photoBlock } from '/components/photo'
import {
  InlineTextarea,
  BlocksControls,
  InlineBlocks
} from 'react-tinacms-inline'

export function Project({ index }) {
  return (
    <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls>
      <div className='project paper'>
        <div className='row'>
          <div className='col-7'>
            <h2>
              <InlineTextarea name='headline' />
            </h2>
            <InlineTextarea name='subtext' />
          </div>
          <div className='col-5'>
            <InlineBlocks name='photos' blocks={PHOTO_BLOCKS} />
          </div>
        </div>
      </div>
    </BlocksControls>
  )
}

export const projectBlock = {
  Component: Project,
  template: {
    label: 'Project',
    defaultItem: {
      headline: 'Project 1',
      subtext: 'Something ok',
      _template: 'photos',
      photos: [
        {
          _template: 'photo',
          src: '/photo.jpeg',
          alt: 'A Photo'
        },
        {
          _template: 'photo',
          src: '/photo2.jpeg',
          alt: 'A Nother'
        }
      ]
    },
    fields: []
  }
}

const PHOTO_BLOCKS = {
  photo: photoBlock
}
