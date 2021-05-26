import {
  BlocksControls,
  InlineTextarea,
  InlineImage
} from 'react-tinacms-inline'

export function Photo({ data }) {
  return (
    <BlocksControls index={data}>
      <div className='photo'>
        <div className='row'>
          <div className='photo__image'>
            <InlineImage
              name='imageName'
              parse={(media) => media.id}
              uploadDir={() => '/public/'}
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
