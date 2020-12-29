import React from 'react'
import {Container, Row, Col, ListGroup} from 'reactstrap'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieItem from './MovieItem/MovieItem'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const MovieCard = props => {
    const { movies } = props
    
    return(
        <Carousel responsive={responsive} style ={{marginTop : 300}}>
            {
                movies.map(prod => <MovieItem key={prod.id} details={prod} />)
            }
         
        </Carousel>
    );
}

export default MovieCard