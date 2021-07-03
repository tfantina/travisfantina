import Paper from '../components/paper'
import { photoBlock } from '../components/photo'
import { InlineBlocks } from 'react-tinacms-inline'
import Legend from '../components/legend'
import Edit from '../components/edit'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

export default function Intro({ pageData }) {
  return (
    <div className='project paper'>
      <div className='paper__overlay'>
        <div className='row'>
          <div className='order-2 order-md-2 col-12 col-md-8'>
            <Paper data={pageData} edit={<Edit />} />
          </div>
          <div className='order-1 order-md-2 col-12 col-md-4'>
            <InlineBlocks name='photos' blocks={PHOTO_BLOCKS} />
          </div>
        </div>
      </div>
      <Legend />
    </div>
  )
}

const PHOTO_BLOCKS = {
  photo: photoBlock
}
