import { InlineTextarea } from 'react-tinacms-inline'

export default function Photo({ data }) {
  console.log(data);
  return (
    <div className='photo'>
      <div className='row'>
        <div className='photo__image'>
          <img src={data.aboutPhoto} alt={data.photoTitle} />
        </div>
      </div>
      <div className='row'>
        <div className='photo__caption'>
          <InlineTextarea name='photoTitle' />
        </div>
      </div>
    </div>
  )
}
