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
      },

      { label: 'Content', name: 'content', component: 'markdown' },
      {
        label: 'Timeline',
        name: 'rawJson.timeline',
        component: 'group-list',
        description: 'Timeline',
        itemProps: (item) => ({
          key: item.id,
          label: item.name
        }),
        defaultItem: () => ({
          name: 'New Event',
          id: Math.random().toString(36).substr(2, 9)
        }),
        fields: [
          {
            label: 'Date',
            name: 'name',
            component: 'text'
          },
          {
            label: 'Event',
            name: 'event',
            component: 'text'
          }
        ]
      }
    ]
  }

  return formOptions
}
