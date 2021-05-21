import {
  BlocksControls,
  InlineTextarea,
  InlineImage
} from 'react-tinacms-inline'

export function Photo({ data }) {
  console.log('Here?')
  return (
    <BlocksControls index={data}>
      <div className='photo'>
        <div className='row'>
          <div className='photo__image'>
            <InlineImage
              name='photo_Image'
              parse={(media) => media.id}
              uploadDir={() => '/'}
              alt='alt'
            />
          </div>
        </div>
        <div className='row'>
          <div className='photo__caption'>
            <InlineTextarea name='alt' />
          </div>
        </div>
      </div>
    </BlocksControls>
  )
}

export const photoBlock = {
  Component: Photo,
  template: {
    label: 'Photo',
    defaultItem: {
      src: '/photo2.jpg',
      alt: 'alttext'
    },
    fields: []
  }
}
