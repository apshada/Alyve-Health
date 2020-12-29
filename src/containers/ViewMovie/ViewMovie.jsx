import React, { useState } from 'react'
import { connect } from 'react-redux'
import  { getMovies, getSelectedQuantity  } from '../../redux/reducers/moviesReducer'
import {getAllDates} from '../../redux/reducers/datesReducer'
import Alldates from  '../../api/dates.json'
import Allslots from '../../api/slots.json'
import '../MovieList/MovieList.css'
import { Link } from 'react-router-dom'




const ViewMovie = props => {

    const [date, setDate] = useState('');
    const [slot, setSlot] = useState('');
    const [count, setCount] = useState(0);
    const MovieId = (props.match.params.MovieId);
    const { getMovies, getSelectedQuantity } = props
    let movie = getMovies(MovieId);
    
    const [data , setData] = useState([])

    const handleConfirm = () => {
        data.push(date);
        data.push(slot);
        data.push(count);
        data.push(movie.rating);
        data.push(movie.img_url);
        data.push(movie.title);
    }

        console.log(data);
    return(
        <div className="Title">
             <h1 style ={{marginTop : 105, marginLeft : 20,  fontSize : 40}}>{movie.title}</h1>
             <h1 style ={{marginTop : 10, marginLeft : 20,  fontSize : 25}}>Rating - : {movie.rating}</h1>
             <div style={{display : 'flex', flexDirection : "row", justifyContent : "space-between" , margin : 25, }}>
                <img src={movie.img_url} style={{width : 400, height : 400, marginRight : 20}} />
                <div style={{display : 'flex', flexDirection : 'column'}}>
                <h2>Information</h2>
                <p style={{fontSize : 20}}>{movie.desc}</p>
                <h2 style ={{marginTop : 10, marginLeft : 20,  fontSize : 25}}>Book Your Ticket</h2>
                <div className="button-wrapper" style={{display : 'flex', flexDirection : 'row' , justifyContent : 'space-around'}}>
                {
                Alldates.map(prod => <button  className="Button" key={prod.date}   onClick={() => {
                    if(prod.status === 1){
                        setDate(prod.date)
                    }
                    else{
                        setDate('NO SLOT')
                    }
                  }} >
                    {prod.date} 
                </button>)
                
            }
                

            </div>
            {date.length > 0 && date !== 'NO SLOT' &&
            <div style={{display: 'flex',marginRight : 25, marginTop : 10, flexDirection : 'row',}}>
            <h2 style ={{marginTop : 10,  fontSize : 25}}>Ticket Number</h2>
        
            <button  className="Button"  onClick={() => setCount(count + 1)}  style={{margin : 10}}>
                    +
                </button>
                <h3 style={{margin : 10, fontSize : 40}}>{count}</h3>
                <button  className="Button" onClick={() => setCount(count - 1)}  style={{margin : 10}}>
                   -
                </button>
                </div>
            }

            {date.length > 0 && count > 0 &&  date !== 'NO SLOT' &&
            <div style={{display: 'flex',marginRight : 25, marginTop : 10, flexDirection : 'row',}}>
            <h2 style ={{marginTop : 10,  fontSize : 25}}>Book a Slot</h2>
        
            <button  className="Button"  onClick={() => { setSlot(Allslots[date][0])}}  style={{margin : 10}}>
            {Allslots[date][0]} 
                </button>
                <button  className="Button"  onClick={() => { setSlot(Allslots[date][1])}}  style={{margin : 10}}>
                {Allslots[date][1]}
                </button>
                <button  className="Button"  onClick={() => { setSlot(Allslots[date][2])}}  style={{margin : 10}}>
                {Allslots[date][2]}
                </button>
                </div>
            }
            </div>
             </div>
            {date.length > 0 && count > 0 && slot.length > 0 &&  date !== 'NO SLOT' &&
            <Link to={{
                pathname: "/confirm",
               // your data array of objects
                data :  data
                }}>
                <center>
             <button  className="Button"  onClick={handleConfirm}  style={{margin : 10, display : 'flex', alignItems : 'center', textDecoration : 'none'}}>
              Confirm
            </button>
            </center>
            </Link>

            
        }
        </div>


    )
    
}

const mapStateToProps = state => ({
    getMovies: id => getMovies(state.movies, id),
    getSelectedQuantity: id => getSelectedQuantity(state.movies, id),
    dates : getAllDates(state.dates)
})

export default connect(mapStateToProps)(ViewMovie);

