export default function tinaFormOptions() {
  const formOptions = {
    label: 'Home Page',
    fields: [
      {
        label: 'Header',
        name: 'header',
        component: 'group',
        fields: [
          {
            label: 'Image',
            name: 'coverImage',
            component: 'image',
            parse: (media) => {
              if (!media) return ''
              return media.id
            },
            uploadDir: () => '/img/',
            previewSrc: (fullSrc) => fullSrc.replace('/public/img/', '')
          },
          { label: 'Title', name: 'title', component: 'text' },
          { label: 'Subtitle', name: 'subtitle', component: 'text' }
        ]
      }
    ]
  }

  return formOptions
}
