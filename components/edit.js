import { useCMS } from 'tinacms'

export default function EditLink() {
  const cms = useCMS()
  return (
    <a href='#' onClick={() => cms.toggle()}>
      {cms.enabled ? 'Exit Edit Mode' : 'Edit This Site'}
    </a>
  )
}
