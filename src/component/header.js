import React from 'react'
import {connect} from 'react-redux'
import {filterByTitle,filterByStar} from '../action/action'
import StarRatings from 'react-star-ratings';
import ModalExample from '../component/modal'




function Header({filterByTitle,filterByStar}) {
    return (
        <div className="header">
            <div className="starsearch">
             <StarRatings 
                
                starDimension={'20px'}
                starSpacing={'1px'}
                starRatedColor="blue"
                changeRating={(newRating) => filterByStar(newRating)}
                numberOfStars={5}
                name='rating'
                 />
             </div>
             <input className="input-search" onChange={(e)=>filterByTitle(e.target.value)}/>
        <ModalExample/>
        </div>
    )
}
const mdtp=(dispatch)=>{
    return({
        filterByTitle:payload=>dispatch(filterByTitle(payload)),
        filterByStar:payload=>dispatch(filterByStar(payload)),

    })
}
export default connect(null,mdtp)(Header)