import './index.css'

import {Component} from 'react'
import Reference from '../ReferencePage'
import Navbar from '../Navbar'
import Footer from '../Footer'

class Popular extends Component {
  state = {movieDetails: '', page: 1}

  componentDidMount() {
    this.getData()
  }

  convertSnakeCaseToPascalCase = dta => ({
    adult: dta.adult,
    backdropPath: dta.backdrop_path,
    genreIds: dta.genre_ids,
    id: dta.id,
    originalLanguage: dta.original_language,
    originalTitle: dta.original_title,
    overView: dta.overview,
    popularity: dta.popularity,
    posterPath: dta.poster_path,
    releaseDate: dta.release_date,
    title: dta.title,
    video: dta.video,
    voteAverage: dta.vote_average,
    voteCount: dta.vote_count,
  })

  getData = async () => {
    const {page} = this.state
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=9c6db0509fda8d4ff8076f9e438ef2c0&language=en-US&page=${page}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log('response data=', data)
    if (response.ok === true) {
      const {results} = data
      const newData = results.map(each =>
        this.convertSnakeCaseToPascalCase(each),
      )
      this.setState({
        movieDetails: newData,
      })
    }
  }

  nextpage = () => {
    const {page} = this.state
    this.setState(
      {
        page: page + 1,
      },
      this.getData,
    )
  }

  prevPage = () => {
    const {page} = this.state
    if (page > 1) {
      this.setState(
        {
          page: page - 1,
        },
        this.getData,
      )
    }
  }

  renderResult = () => {
    const {movieDetails} = this.state

    if (movieDetails !== '') {
      return movieDetails.map(each => <Reference key={each.id} movie={each} />)
    }
    return ''
  }

  render() {
    const {movieDetails, page} = this.state
    console.log('movie details*****', movieDetails)
    return (
      <>
        <Navbar />
        <div className="popular-container">
          <div className="width-container">
            <h1 className="popular-heading">Popular</h1>
            <ul className="movies-container">{this.renderResult()}</ul>
          </div>
        </div>
        <Footer nextpage={this.nextpage} prevPage={this.prevPage} page={page} />
      </>
    )
  }
}

export default Popular
