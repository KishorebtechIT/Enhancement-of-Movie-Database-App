import './index.css'

const Footer = props => {
  const {nextpage, prevPage, page} = props

  const onClickPrev = () => {
    prevPage()
  }

  const onClickNext = () => {
    nextpage()
  }

  return (
    <div className="footer-container">
      <button type="button" className="prev-button" onClick={onClickPrev}>
        Prev
      </button>
      <p className="page-number">{page}</p>
      <button type="button" className="prev-button" onClick={onClickNext}>
        Next
      </button>
    </div>
  )
}

export default Footer
