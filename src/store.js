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

  return prevState
}

export default createStore(reducer, initialState)
