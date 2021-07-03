export default function Header({ data }) {
  return (
    <header>
      <div className='container-md'>
        <div className='row'>
          <div className='col-9 col-md-6 order-md-1 flex align-items-end'>
            <h1>Travis Fantina</h1>
          </div>
          <div className='col-3 col-md-2 order-md-3 flex align-items-end justify-content-end'>
            <h5>since 1991</h5>
          </div>
          <div className='col-12 col-md-4 order-md-2 flex align-items-end'>
            <h3>fullstack developer</h3>
          </div>
        </div>
      </div>
    </header>
  )
}
