import axios from 'axios'

export const addFavorite = movie => {
  return {
    type : 'ADD_FAVORITES',
    movie
  }
}

export const removeFavorite = favorite => {
  return {
    type: 'REMOVE_FAVORITE',
    favorite
  }
}

export const loadMovies = () => dispatch =>
  axios.get('http://localhost:3002/movies')
    .then(response => {
      dispatch({
        type : 'LOAD_MOVIES',
        movies : response.data
      })
    })
