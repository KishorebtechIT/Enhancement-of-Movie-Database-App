import {Switch, Route} from 'react-router-dom'

import Popular from './components/PopularPage'
import TopRated from './components/TopRated'
import Upcoming from './components/Upcoming'
import MovieDetails from './components/movieDetails'
import Search from './components/SearchComponent'
import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Popular} />
      <Route exact path="/top-rated" component={TopRated} />
      <Route exact path="/upcoming" component={Upcoming} />
      <Route exact path="/movie-details/:id" component={MovieDetails} />
      <Route exact path="/searchMovies/:movieName" component={Search} />
    </Switch>
  </>
)

export default App
