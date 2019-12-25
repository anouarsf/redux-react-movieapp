import React from 'react'
import {Link} from "react-router-dom"
import {connect} from 'react-redux'


function Description ({movie,match}){
    const movieDes = movie.find(el=>el.id==match.params.id)
    return (
      
        <div>
                      <h3 className="title-movie">{movieDes.title}</h3> 
                      <img className="img-movie-desc"src={movieDes.image}/>
                      <p className="description-movie">{movieDes.desc}</p> 



      <Link to="/">  <button className="btn-return">Return</button></Link>
        </div>
    )
}
const mapStateToProps =(state)=>{
    
    return {
    movie:state.Mov
}}
export default connect(mapStateToProps)(Description)

