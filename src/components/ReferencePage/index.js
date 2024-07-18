import './index.css'
import {Link} from 'react-router-dom'

const Reference = props => {
  const {movie} = props
  const {title, posterPath, voteAverage, id} = movie

  const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`

  return (
    <li className="movie-item">
      <img src={imageUrl} alt="moviePoster" className="image" />
      <p className="text">{title}</p>
      <p className="text"> Rating: {voteAverage}</p>
      <Link to={`/movie-details/${id}`}>
        <button type="button" className="viewbutton">
          View Details
        </button>
      </Link>
    </li>
  )
}

export default Reference
