export default function Footer({ data }) {
  const year = new Date().getFullYear()
  console.log(year)
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row footer-end justify-content-center'>
          <div className='col-12 col-md-4 text-center order-1'>
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
          <div className='col-12 col-md-4 text-center order-2'>
            <h5> Boring</h5>
            &copy; Travis Fantina {year}
          </div>
        </div>
      </div>
    </footer>
  )
}
