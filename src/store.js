import {createStore} from "redux"

const initialState = {
  favorites: []
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

  return prevState
}

export default createStore(reducer, initialState)
