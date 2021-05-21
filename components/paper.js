import ReactMarkdown from 'react-markdown'
import { InlineWysiwyg } from 'react-tinacms-editor'
import { InlineTextarea } from 'react-tinacms-inline'
export default function Paper({ data }) {
  console.log(data.aboutBody)
  return (
    <div className='paper'>
      <div className="paper__overlay">
      <h2>
        <InlineTextarea name='aboutTitle' />
      </h2>
      <InlineWysiwyg name='aboutBody' format='markdown'>
        <ReactMarkdown children={data.aboutBody} />
      </InlineWysiwyg>
      </div>
    </div>
  )
}
