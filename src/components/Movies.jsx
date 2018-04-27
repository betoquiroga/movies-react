import React, {Component} from 'react';
import store from '../store'
import {addFavorite} from "../actionCreactors"

class Movies extends Component {

  constructor(props) {
    super(props);

    this.state = {
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

    this.addFavorite = this.addFavorite.bind(this);

  }

  render() {
    return (
      <div className="ed-container l-section">
        <div className="ed-item">
          <h2>Películas</h2>
        </div>
        {
          this.state.movies.map((movie, i) => (
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
                      <button className="button--cta small" onClick={() => this.addFavorite(movie)}>Favorito</button>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }

  addFavorite(movie) {
    store.dispatch(addFavorite(movie))
  }

}

export default Movies;
