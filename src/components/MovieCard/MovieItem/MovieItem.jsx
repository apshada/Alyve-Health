import React from 'react'
import { Row, Col, Badge, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../../containers/MovieList/MovieList.css'




const MovieItem = props => {
    const { id, img_url, title, rating } = props.details 

    return(
        <Link to={`/ViewMovie/${id}`} className="pd-link" style={{textDecoration : 'none'}}>
        <ListGroupItem key={id} className="mb-4 shadow-sm"  style ={{marginTop : 25, marginLeft : 20}}>
            <div className="Item" style={{backgroundImage: 'url(' + img_url + ')'}} >
                    <div className="overlay" >
                    <div className="title" >{title}</div>
                    <div className="rating">{rating}</div>
        </div>
      </div>
        </ListGroupItem>
        </Link>
    );
}

export default MovieItem