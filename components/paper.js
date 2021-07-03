import ReactMarkdown from 'react-markdown'
import { InlineWysiwyg } from 'react-tinacms-editor'
import { InlineTextarea } from 'react-tinacms-inline'
export default function Paper({ data, edit }) {
  const editbtn = edit ? edit : ''
  return (
    <div>
      <h2>
        <InlineTextarea name='aboutTitle' />
      </h2>
      <InlineWysiwyg name='aboutBody' format='markdown'>
        <ReactMarkdown children={data.aboutBody} />
      </InlineWysiwyg>

      {editbtn}
    </div>
  )
}
