export default function Footer({ data }) {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row flex-column align-items-center'>
          <div className='col-8'>
            <h5 className='text-center'>Credits</h5>

            <div className='row flex-column'>
              <p>This is a website.</p>
              <p>It was made with:</p>
              <ul>
                <li>TINA CMS</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>NextJS</li>
                <li>Sketch</li>
                <li>Vercel</li>
              </ul>
              TINA CMS an innovative WYSIWYG content editor.
              <br />
              Try it out by clicking here to edit this site!
            </div>
          </div>
        </div>

        <div className='row footer-end'>
          <div className='col-4'>
            <h5>Find me elsewhere</h5>
            <ul>
              <li>
                <a href='mailto:trav@hey.com'>trav@hey.com</a>
              </li>
              <li>
                <a href='https://twitter.com/tfantina'>Twitter</a>
              </li>
              <li>
                <a href='https://mmm.page/trav.main'>Mmm.page</a>
              </li>
            </ul>
          </div>
          <div className='col-4'>
            <h5> Boring</h5>
            Copyright
          </div>
        </div>
      </div>
    </div>
  )
}
