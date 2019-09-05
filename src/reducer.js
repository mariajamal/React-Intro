
const initialstate ={
    toogle:false,
    count:0
}

//Function

const toogleReducer=(state=initialstate, action)=>{
    switch(action.type){
        case "TOOGLE":
            return {...state, toogle: !state.toogle}
        case "INC":
            return {...state, count: state.count +1}
        case "DEC":
            return {...state, count: state.count -1}
        default:
            return {...state};
    }
}

export default toogleReducer;