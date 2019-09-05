import React from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {toogleFunction} from './action'

const Toogle = (props)=>{
    return(
        <div>
            {props.toogle && <h1>Hello All</h1>}
            <button onClick={props.toogleFunction}>Toogle</button>
        </div>
    )
}

const mapStatetoProps = state =>({
    toogle: state.toogleReducer.toogle
})

const mapDispatchtoProps = dispatch => bindActionCreators({
    toogleFunction
},dispatch)


export default connect(mapStatetoProps, mapDispatchtoProps)(Toogle)