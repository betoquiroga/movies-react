import {applyMiddleware, createStore} from "redux"
import {logger} from "redux-logger"
import thunk from "redux-thunk"

const initialState = {
  favorites: [],
  movies : []
}

const reducer = (prevState, action) => {

  if (action.type === 'ADD_FAVORITES') {
    return {
      ...prevState,
      favorites: prevState.favorites.concat(action.movie)
    }
  }
  if(action.type === 'REMOVE_FAVORITE') {
    return {
      ...prevState,
      favorites : prevState.favorites.filter(fav => fav.id !== action.favorite.id)
    }
  }

  if(action.type === 'LOAD_MOVIES') {
    return {
      ...prevState,
      movies : action.movies
    }
  }
  return prevState
}

export default createStore(reducer, initialState, applyMiddleware(logger, thunk))
