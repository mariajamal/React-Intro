const initialstate ={
    toogle:false,
}

const toogleReducer=(state=initialstate, action)=>{
    switch(action.type){
        case "TOOGLE":
            return {...state, toogle: !state.toogle}
        default:
            return {...state};
        }
}

export default toogleReducer;