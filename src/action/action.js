  
  export function filterByTitle(payload) {
    return {
         type: "FILTER_TITLE", payload };
  }

    
export function filterByStar(payload) {
  return { type: "FIND_BYRATING", payload };
}

  
export function addmovie(payload) {
  return { type: "ADD", payload };
}

export function deleteText(payload) {
  return { type: "DELETE", payload };
}

export function updatetask(payload) {
  return{
      type : 'UPDATE' , payload
  }
}