import React from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {incCount} from './action'
import {decCount} from './action'
const Count = (props)=>{
    return(
        <div>
            <h1>Count : {props.count}</h1>
            <button onClick={props.incCount}>INC</button>
            <button onClick={props.decCount}>DEC</button>

        </div>
    )
}

const mapStatetoProps = state =>({
    count: state.toogleReducer.count
})

const mapDispatchtoProps = dispatch => bindActionCreators({
    incCount,
    decCount
},dispatch)

export default connect(mapStatetoProps,  mapDispatchtoProps)(Count)