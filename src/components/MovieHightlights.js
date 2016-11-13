import React, { Component } from 'react';
import MovieHighlightSingle from './MovieHighlightSingle.js';
import Slider from 'react-slick';

/*const styles = {
  MovieHightlights: {
    width: 800,
    height: 500,
    margin: "0 auto",    
    boxShadow: "3px 3px 1px #888888"
  }

}*/

class MovieHightlights extends Component {
  
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    console.log(this.props)
    var moviesToMap = this.props.movies
    return (
      <Slider {...settings}>
      <h1>{this.props.movieTitle}</h1>
       {moviesToMap.map((movie) => <div><MovieHighlightSingle consoleMovieInfo={this.props.getMovieInfo.bind(this)} movie={movie}/></div>)}
     </Slider>
    );            
  }
}

export default MovieHightlights;