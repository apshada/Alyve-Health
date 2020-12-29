import React from 'react'
import { Link } from 'react-router-dom'
import confirmMovie from '../../api/movies.json'


const ConfirmTicket = (props) => {
    const { data } = props.location
    console.log(data)
    console.log(confirmMovie)
    if(data.length > 0){
    return(
        
        <div>
             <h1 style ={{marginTop : 105, marginLeft : 20,  fontSize : 40}}>{data[5]}</h1>
             <h1 style ={{marginTop : 10, marginLeft : 20,  fontSize : 25}}>Rating - : {data[3]}</h1>
             <h1 style ={{marginTop : 10, marginLeft : 20,  fontSize : 25}}>Slot -: {data[1]}</h1>
             <h1 style ={{marginTop : 10, marginLeft : 20,  fontSize : 25}}>No. of Tickets -: {data[2]}</h1>
             <h1 style ={{marginTop : 5, marginLeft : 20,  fontSize : 25}}>PVR Cinemas</h1>
             <h1 style ={{marginTop : 10, marginLeft : 20,  fontSize : 25}}>Mob. NO. -: +71 9999</h1>
             
             <div style={{display : 'flex', flexDirection : "row", justifyContent : "space-between" , margin : 25, }}>
                <img src={data[4]} style={{width : 200, height : 200, marginRight : 20}} />
                </div>
            
                <Link to='/'>
                <center>
             <button  className="Button"  style={{margin : 10, display : 'flex', alignItems : 'center', textDecoration : 'none'}}>
              Go To Home
            </button>
            </center>
            </Link>
        </div>
        
    );
}
return(
    <p>Select Movie</p>
)
}


export default ConfirmTicket