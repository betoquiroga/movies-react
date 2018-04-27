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
