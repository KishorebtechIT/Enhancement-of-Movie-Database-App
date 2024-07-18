import './index.css'
import {Component} from 'react'

import Navbar from '../Navbar'

class MovieDetails extends Component {
  state = {movieDetails: [], castDetails: []}

  componentDidMount() {
    this.getData()
    this.getCastData()
  }

  convertSnakeCaseToPascalCase = data => ({
    adult: data.adult,
    castId: data.cast_id,
    character: data.character,
    creditId: data.credit_id,
    gender: data.gender,
    id: data.id,
    knownForDepartment: data.known_for_department,
    name: data.name,
    order: data.order,
    originalName: data.original_name,
    popularity: data.popularity,
    profilePath: data.profile_path,
  })

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=9c6db0509fda8d4ff8076f9e438ef2c0&language=en-US`
    const response = await fetch(apiUrl)
    const data = await response.json()

    if (response.ok === true) {
      const movieData = {
        name: data.original_title,

        imageUrl: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
        rating: data.vote_average,
        duration: data.runtime,
        genre: data.genres,
        releaseDate: data.release_date,
        overView: data.overview,
      }
      console.log('response data = ', movieData)
      this.setState({
        movieDetails: movieData,
      })
    }
  }

  getCastData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=9c6db0509fda8d4ff8076f9e438ef2c0&language=en-US`
    const response = await fetch(apiUrl)
    const data = await response.json()

    if (response.ok === true) {
      const {cast} = data
      console.log('old cast', cast)
      const newData = cast.map(each => this.convertSnakeCaseToPascalCase(each))
      console.log('new data', newData)
      this.setState({
        castDetails: newData,
      })
    }
  }

  renderGenre = genre => {
    if (genre !== undefined) {
      if (genre.length === 2) {
        const genre1 = genre[0].name
        const genre2 = genre[1].name
        return (
          <p>
            {genre1}/{genre2}
          </p>
        )
      }

      const genre1 = genre[0].name
      return <p>{genre1}</p>
    }
    return ''
  }

  renderMovieDetails = () => {
    const {movieDetails} = this.state
    const {
      name,
      imageUrl,
      rating,
      duration,

      releaseDate,
      overView,
    } = movieDetails
    const {genre} = movieDetails

    return (
      <div className="movie-details-container">
        <div className="left-container">
          <img src={imageUrl} className="detailed-image" alt="movie" />
          <div className="movie-details-text-container">
            <h1>{name}</h1>
            <div className="duration-genre-rating-container">
              <p>{releaseDate}</p>

              {this.renderGenre(genre)}
              <p>{duration} m</p>
              <p>{rating}</p>
            </div>
            <h3>Overview</h3>
            <p>{overView}</p>
          </div>
        </div>
      </div>
    )
  }

  renderCastDetails = cast => {
    const {originalName, character, profilePath} = cast
    const imageUrl = `https://image.tmdb.org/t/p/original/${profilePath}`
    return (
      <li className="each-cast">
        <img src={imageUrl} className="cast-image" alt="cast" />
        <h4>{originalName}</h4>
        <p>{character}</p>
      </li>
    )
  }

  render() {
    const {castDetails} = this.state

    return (
      <>
        <Navbar />

        <div className="container">
          {this.renderMovieDetails()}

          {castDetails !== undefined ? (
            <div className="cast-container">
              <h2 className="cast-heading">Cast</h2>
              <ul className="unordered-container">
                {castDetails.map(each => this.renderCastDetails(each))}
              </ul>
            </div>
          ) : (
            ''
          )}
        </div>
      </>
    )
  }
}

export default MovieDetails
