import { InlineTextarea } from 'react-tinacms-inline'
export default function Paper() {
  return (
    <div className='paper'>
      <h2>
        <InlineTextarea name='aboutTitle' />
      </h2>
      <InlineTextarea name='aboutBody' />
    </div>
  )
}
