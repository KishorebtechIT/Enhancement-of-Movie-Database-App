Develop an application based on video-on-demand websites that provides an extensive database of available content. It should consist of various pages and a global navbar.

- Popular Movies Page (Home Page)
- Top Rated Movies Page
- Upcoming Movies Page
- Single Movie Details Page
- Searched Movies Page

<br/>
### List of Features
<br/>
#### Popular Movies Page (Home Page):

- Users should be able to view a grid of movie posters, arranged in multiple rows and columns, fetched from the **popular movies API**.
- Each movie poster should include an image of the movie, its name, its rating, and a `View Details` button.

#### Top Rated Movies Page:

- Users should be able to view a grid of movie posters, arranged in multiple rows and columns, fetched from the **top rated movies API**.
- Each movie poster should include an image of the movie, its name, its rating, and a `View Details` button.

#### Upcoming Movies Page:

- Users should be able to view a grid of movie posters, arranged in multiple rows and columns, fetched from the **upcoming movies API**.
- Each movie poster should include an image of the movie, its name, its rating, and a `View Details` button.

#### Single Movie Details Page:

- When users click on the `View Details` button of a specific movie poster on any movie page, it should open a new page displaying the details of the respective movie.
- Users should be able to see two sections:
  - Movie details section
  - Cast details section
- The movie details section should include the movie's name, image, ratings, duration, genre, release date, and an overview, all of which will be fetched from the **movie details API**.
- The cast details section should display a grid of cast members, arranged in multiple rows and columns, retrieved from the **movie cast details API**.
- Each cast member's details should include their image, their original name, and their character name in the movie.

#### Searched Movies Page:

- The searched movies page should only be displayed when a search is initiated.
- Users should be able to view a grid of movie posters, arranged in multiple rows and columns, fetched from the **searched movies API**.
- Each movie poster should include an image of the movie, its name, its rating, and a `View Details` button.

**Enhanced Features:**

- Every page should feature a global nav bar at the top.
- Initially, users should be able to see the Popular Page (Home Page) upon accessing the website.
- Each page corresponds to a different route.
- Each page has pagination in  it's footer section

