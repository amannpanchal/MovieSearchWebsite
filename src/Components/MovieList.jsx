import React from 'react'
import MovieDetails from './MovieDetails'

const MovieList = ({MovieListt}) => {
    const [id , updatedId] = React.useState(null);

    const they = (i)=> {
        updatedId(i);
        
    }
    var button ;
    if(id === null) {
        button= <h4 className= "omit"> </h4>;
    }
    else {
        button =  <MovieDetails id={id} />
        
    }
    
  return (
   <>
          <div class="move">
              {
                  MovieListt.map((i) => {
                      return (
                          <div>
                              <a className="list" href="#contact" key={i} onClick={() => { they(i) }} >
                                  <h3>{i.Title}</h3>
                                  <img src={i.Poster} alt="...." style={{ width: "30px", height: "30px" }} />


                              </a>

                          </div>
                      )
                  })
              }
              
              </div>
              <div className="hello">{button}</div>
   
   </>
  )
}

export default MovieList
