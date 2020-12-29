import React from 'react'
import { connect } from 'react-redux'
import MovieCard from '../../components/MovieCard/MovieCard'
import { getAllMovies } from '../../redux/reducers/moviesReducer'
import './MovieList.css'


const MovieList = props => {
    const { movies } = props

    console.log(movies)
    return(
        <div>
             <div className="Title">  
           <h1 style ={{marginTop : 75, marginLeft : 20,  fontSize : 40}}>Latest Movies</h1>
           <MovieCard movies={movies} />
           <h1 style ={{marginLeft : 20, fontSize : 40}}>Best for You</h1>
           <MovieCard movies={movies} />
       
           </div>
        </div>
    );
}

const mapStateToProps = state => ({
    movies : getAllMovies(state.movies)
})

export default connect(mapStateToProps)(MovieList)