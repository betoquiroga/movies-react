import React, {Component} from 'react';
import store from '../store'
import {addFavorite} from "../actionCreactors"
import {connect} from "react-redux"

const Movies = props => (
  <div className="ed-container l-section">
    <div className="ed-item">
      <h2>Películas</h2>
    </div>
    {
      props.movies.map((movie, i) => (
        <div className="l-25 m-50 to-center l-block padding" key={i}>
          <div className="card card--mini">
            <div className="card__img">
              <img  alt={`iamge-${i}`} src={movie.image} />
            </div>
            <div className="card__content">
              <div className="card__title">{movie.title}</div>
              <div className="card__body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet facilisis orci. Duis sit amet ipsum eu est egestas commodo. </p>
              </div>
              <footer className="card__footer">
                <div className="card__button">
                  <button className="button--cta small" onClick={() => props.addFavorite(movie)}>Favorito</button>
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
  movies : state.movies
})


const mapDispatchToProps = dispatch => ({
  addFavorite(movie) {
    store.dispatch(addFavorite(movie))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Movies);
