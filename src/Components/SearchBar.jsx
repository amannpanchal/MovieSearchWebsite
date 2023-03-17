import React,{useState} from 'react'
import MovieList from './MovieList';


const SearchBar = () => {
  const [input,updatedInput] = useState(null);
  const [title,updatedTitle] = useState([])

 
  

  const seeValues = async () => {
    try {
      if(input === "") {
        alert("Please write anything.")
      }
      else {
        let url = `https://www.omdbapi.com/?s=${input}&apikey=4b7e890f`;
     let res = await fetch(url);
     let data = await res.json();
     console.log(data);
     updatedTitle(data.Search);
     updatedInput("");
     console.log(title);
      }
    }
    catch(e){
      console.log(e);
      
    }
   
  }
  return (
    <div className = "container">
    <div className = "heading">
    <h1>Search
                  <span>Movies | Serial | Shows</span>
   </h1>
    </div>


    <div className = "SearchBar">
    <input type = "text"
    value ={input}
    onChange = {(e) => {updatedInput(e.target.value)}}
    ></input>
    <button
    onClick = {seeValues}
    
    >Search</button>

    </div>
      <MovieList MovieListt={title} />
      
  
    </div>
  )
}

export default SearchBar