import {createStore} from "redux"


const setFrom = (state={isfrom : false, data :[]},action) =>{
  
    if (action.type ==='form'){
        return({
            isfrom:true,
            data:[]
        })
    }
    if(action.type === "setdata"){
        return({
            isfrom:true,
           data:[...state.data,action.payload]
        })
    }
    if(action.type === "closeform"){
        return({
            isfrom:false,
            data:[]
        })
    }

  
    return state
}

const store = createStore(setFrom);

export default store;