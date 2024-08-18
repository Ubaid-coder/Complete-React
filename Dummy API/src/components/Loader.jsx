

function Loader() {
  return (
    <div>
      <div className="text-center">
        <div className="spinner-border" style={{height: '5rem', width: '5rem', paddingTop: '30px'}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  )
}

export default Loader
