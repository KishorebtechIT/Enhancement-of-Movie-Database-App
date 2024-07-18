import './index.css'
import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'

class Navbar extends Component {
  state = {movieName: ''}

  onChangeMovieName = event => {
    this.setState({
      movieName: event.target.value,
    })
  }

  onClickSearchBtn = () => {
    const {movieName} = this.state

    if (movieName !== '') {
      const {history} = this.props

      history.push(`/searchMovies/${movieName}`)
    }
  }

  render() {
    const {movieName} = this.state
    return (
      <div>
        <div className="nav-container">
          <h1 className="title">movieDB</h1>

          <div className="search-container">
            <input
              type="search"
              className="input"
              value={movieName}
              placeholder="Enter movie name"
              onChange={this.onChangeMovieName}
            />

            <button
              type="button"
              className="search-button"
              onClick={this.onClickSearchBtn}
            >
              Search
            </button>
          </div>

          <ul className="routes-container">
            <Link to="/" className="link-component">
              <li>
                <button type="button" className="button">
                  Popular
                </button>
              </li>
            </Link>
            <Link to="/top-rated" className="link-component">
              <li>
                <button type="button" className="button">
                  Top Rated
                </button>
              </li>
            </Link>
            <Link to="/upcoming" className="link-component">
              <li>
                <button type="button" className="button">
                  {' '}
                  Upcoming
                </button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    )
  }
}
export default withRouter(Navbar)
