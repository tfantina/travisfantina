import ReactMarkdown from 'react-markdown'
import { InlineWysiwyg } from 'react-tinacms-editor'
import { InlineTextarea } from 'react-tinacms-inline'
export default function Paper({ data }) {
  return (
    <div className='paper'>
      <h2>
        <InlineTextarea name='aboutTitle' />
      </h2>
      <InlineWysiwyg name='aboutBody' format='markdown'>
        <ReactMarkdown source={data} />
      </InlineWysiwyg>
    </div>
  )
}
