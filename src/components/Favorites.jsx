import React, {Component} from 'react';
import store from '../store'
import {removeFavorite} from "../actionCreactors"
import {connect} from "react-redux"


const Favorites = props => (
  <div className="ed-container l-section">
    {
      props.favorites && props.favorites.length > 0 ?
        <div className="ed-item">
          <h2>Favoritos</h2>
        </div>
        :
        null
    }
    {
      props.favorites.map((favorite, i) => (
        <div className="l-25 to-center l-block padding" key={i}>
          <div className="card card--mini">
            <div className="card__img">
              <img alt={`iamge-${i}`} src={favorite.image} />
            </div>
            <div className="card__content">
              <div className="card__title">{favorite.title}</div>
              <div className="card__body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet facilisis orci. Duis sit amet ipsum eu est egestas commodo. </p>
              </div>
              <footer className="card__footer">
                <div className="card__button">
                  <button className="button--alert small" onClick={() => props.removeFavorite(favorite)}>Quitar</button>
                </div>
              </footer>
            </div>
          </div>
        </div>
      ))
    }
  </div>
)




const mapStateToProps = state => ({
  favorites : state.favorites
})

const mapDispatchToProps = dispatch => ({
  removeFavorite(favorite){
    store.dispatch(removeFavorite(favorite))
  }
})



export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

