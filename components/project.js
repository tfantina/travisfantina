import React from 'react'

import { InlineTextarea, BlocksControls } from 'react-tinacms-inline'

export function Project() {
  return (
    <div className='paper'>
      <h2>
        <InlineTextarea name='headline' />
      </h2>
      <InlineTextarea name='subtext' />
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
      subtext: 'Something ok'
    },
    fields: []
  }
}
