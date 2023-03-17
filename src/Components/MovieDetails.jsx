import React from 'react'

const MovieDetails = ({id}) => {
  return (
    <div id ="contact">
    <img src = {id.Poster} alt = "no poster"/>
        <div class = "details">
              <h4>{id.Title && "Title : "} {id.Title} </h4>

              <h4>{id.Year && "Year : "} {id.Year}</h4>
              <h4>{id.Type && "Type : "} {id.Type}</h4>

        </div>
      
    </div>
  )
}

export default MovieDetails
