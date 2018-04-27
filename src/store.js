import {applyMiddleware, createStore} from "redux"
import {logger} from "redux-logger"

const initialState = {
  favorites: [],
  movies : [
    { id: 1, title: "Capitan América", image: "https://cdn5.jokeblogger.com/sites/default/files/imagecache/topic_large/category_pictures/Captain-America1386708947.jpg" },
    { id: 2, title: "Iron Man", image: "https://elladog.com.ar/wp-content/uploads/2018/01/iron-man-_-360x240.jpg" },
    { id: 3, title: "Black Panter", image: "http://sdvoice.info/wp-content/uploads/2018/02/Black-Panther-Featured-012218-360x240.jpg" },
    { id: 4, title: "Avengers", image: "https://i0.wp.com/www.adventuresinpoortaste.com/wp-content/uploads/2018/04/avengers-infinity-war-featured-4.jpg?resize=360%2C240" },
    { id: 5, title: "Deadpool", image: "http://www.revistaxy.com/assets/deadpool-360x240.jpg" },
    { id: 6, title: "Hulk", image: "https://i0.wp.com/maxsoutter.co.business/wp-content/uploads/2012/05/hulk-avengers-movie-1.jpg?resize=360%2C240" },
    { id: 7, title: "Thor", image: "https://elladog.com.ar/wp-content/uploads/2018/03/thor_-360x240.jpg" },
    { id: 8, title: "Spiderman", image: "http://www.pandemonium.com.mx/wp-content/uploads/2017/04/capspidey1-360x240.jpg" }
  ]
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

export default createStore(reducer, initialState, applyMiddleware(logger))
