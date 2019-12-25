import React from "react";
import StarRatings from "react-star-ratings";
import { connect } from "react-redux";
import EditModal from "./EditModal"
import {Link} from "react-router-dom"

import { filterByStar, deleteText, updatetask } from "../action/action";

const MovieList = ({
  Mov,
  filtermovie,
  changeRating,
  rating,
  deleteText
}) => {
  return (
    <div className="container-movie">
      {Mov.filter(
        el =>
          el.rating >= rating && el.title.toLowerCase().includes(filtermovie)
      ).map((movie, id) => (
        <div class="card-movie">
          <button className="btn-read">
          <Link to ={`description/${movie.id}`}> <p className="descr-movie"> Description </p> </Link>
          </button>
          <img className=" img-movie" src={movie.image} />
          <p className="title-movie">{movie.title}</p>
          <EditModal index={id}/>
          <button className="btn-delete" onClick={() => deleteText(movie.id)}> Delete </button>

          <StarRatings
            rating={Number(movie.rating)}
            starDimension={"15px"}
            starSpacing={"1px"}
            starRatedColor="orange"
            changeRating={(newRating, title) => changeRating(newRating, title)}
            numberOfStars={5}
            name="rating"
          />
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => {
  return {
    filterByStar: payload => dispatch(filterByStar(payload)),
    deleteText: payload => dispatch(deleteText(payload)),
    updatetask: payload => dispatch(updatetask(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
