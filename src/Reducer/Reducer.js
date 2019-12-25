import Mov from './movbase' ;

const initialState = {
    Mov ,
    filtermovie:'',
    rating:0 ,
    isloading:true ,
}

function Reduce (state = initialState, action) {
  if (action.type === "FILTER_TITLE") {
    return { ...state, filtermovie: action.payload };
  }
  else if (action.type === "FIND_BYRATING"){
    return {...state, rating:action.payload}
  }
  else if (action.type === "ADD"){
    return {...state, Mov:state.Mov.concat({id:Math.random(),...action.payload})}
  }

  else if (action.type === "DELETE"){
    return {...state, Mov:state.Mov.filter((el,id)=>el.id!==action.payload )}
  }
  
  else if (action.type === "UPDATE"){
      return {...state,Mov:state.Mov.map((el,id)=>
     id===action.payload.id ?
     {...el, title:action.payload.task }: el)}
  }
  else return state
  }


export default Reduce