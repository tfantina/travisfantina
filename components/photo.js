import {
  BlocksControls,
  InlineTextarea,
  InlineImage
} from 'react-tinacms-inline'

import React, { useRef, useState, useLayoutEffect } from 'react'

import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useInView, InView } from 'react-intersection-observer'

export function Photo({ data }) {
  const [start, setStart] = useState(null)
  const [end, setEnd] = useState(null)
  const [scale, setScale] = useState(null)
  const [rotate, setRotate] = useState(null)
  const [x, setX] = useState(null)
  const [y, setY] = useState(null)

  function useRefScrollProgress(inputRef) {
    const ref = inputRef || useRef()
    useLayoutEffect(() => {
      if (!ref.current) {
        return
      }
      const rect = ref.current.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const offsetTop = rect.top + scrollTop

      setStart(offsetTop / (document.body.clientHeight - 100))
      setEnd((offsetTop + rect.height * 1.2) / document.body.clientHeight)
    })
    return { ref, start, end }
  }

  const ref = useRef()
  //
  // const { res, start, end } = useRefScrollProgress(ref)
  //
  // const { scrollY, scrollYProgress } = useViewportScroll()
  //
  // const scale = useTransform(scrollYProgress, [start, end], [1, 1.1])
  // const rotate = useTransform(scrollYProgress, [start, end], [0, 30])
  // const y = useTransform(scrollYProgress, [start, end], [0, -100])
  // const x = useTransform(scrollYProgress, [start, end], [0, -200])
  const { scrollY, scrollYProgress } = useViewportScroll()
  const updateStates = (inView) => {
    if (inView) {
      console.log(inView)
      // let { scrollY, scrollYProgress } = useViewportScroll()
      // let { res, start, end } = useRefScrollProgress(ref)
      const rect = ref.current.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const offsetTop = rect.top + scrollTop

      setStart(offsetTop / (document.body.clientHeight - 100))
      setEnd((offsetTop + rect.height * 1.2) / document.body.clientHeight)

      // setScale(useTransform(scrollYProgress, [start, end], [1, 1.1]))
      // setRotate(useTransform(scrollYProgress, [start, end], [0, 30]))
      // setY(useTransform(scrollYProgress, [start, end], [0, -100]))
      // setX(useTransform(scrollYProgress, [start, end], [0, -200]))
    } else {
      console.log(inView)
    }
  }

  return (
    <BlocksControls index={data}>
      <InView as='div_photo' onChange={(inView, entry) => updateStates(inView)}>
        <motion.div style={{ scale: scale, rotate: rotate, y: y, x: x }}>
          <div ref={ref}>
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
          </div>
        </motion.div>
      </InView>
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
