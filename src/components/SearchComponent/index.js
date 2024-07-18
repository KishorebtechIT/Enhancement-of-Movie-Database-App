import './index.css'

import {Component} from 'react'
import Navbar from '../Navbar'
import Reference from '../ReferencePage'

class Search extends Component {
  state = {searchResults: ''}

  componentDidMount() {
    this.getData()
  }

  convertSnakeCaseToPascalCase = data => ({
    adult: data.adult,
    backdropPath: data.backdrop_path,
    genreIds: data.genre_ids,
    id: data.id,
    originalLanguage: data.original_language,
    originalTitle: data.original_title,
    overView: data.overview,
    popularity: data.popularity,
    posterPath: data.poster_path,
    releaseDate: data.release_date,
    title: data.title,
    video: data.video,
    voteAverage: data.vote_average,
    voteCount: data.vote_count,
  })

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {movieName} = params

    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=9c6db0509fda8d4ff8076f9e438ef2c0&language=en-US&query=${movieName}&page=1`
    const response = await fetch(apiUrl)
    const data = await response.json()

    if (response.ok === true) {
      const {results} = data
      const newData = results.map(each =>
        this.convertSnakeCaseToPascalCase(each),
      )
      this.setState({
        searchResults: newData,
      })
    }
  }

  renderSearchResults = () => {
    const {searchResults} = this.state

    if (searchResults !== '') {
      return (
        <>
          <div className="results-home-container">
            <h1 className="heading">Search Results</h1>
            <ul className="search-result-container">
              {searchResults.map(each => (
                <Reference movie={each} key={each.id} />
              ))}
            </ul>
          </div>
        </>
      )
    }
    return ''
  }

  render() {
    return (
      <>
        <div className="search-home-container">
          <Navbar />
          {this.renderSearchResults()}
        </div>
      </>
    )
  }
}

export default Search
