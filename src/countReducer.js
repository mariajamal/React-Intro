const initialstate ={
     count:0
}

//Function


const countReducer = (state=initialstate, action)=>{
    switch(action.type){
        case "INC":
            return {...state, count: state.count +1}
        case "DEC":
            return {...state, count: state.count -1}
        default:
            return {...state};
    }
}

export default countReducer;