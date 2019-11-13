import React from 'react'
import '../bootstrap.min.css';
import store from './Store'
import * as ActionType from './ActionType'

// import {INCREMENT} from './ActionType'



export default class App1 extends React.Component{

    constructor(props){
        super(props);

        this.state={
            count:store.getState()
        }
    }

    handleIncrement=()=>{
        store.dispatch({
            type:ActionType.INCREMENT
        })
    }

    handleDecrement=()=>{
        //dispatch 派发需要绑定的动作
       store.dispatch({
           type:ActionType.DECREMENT
       })
    }

    render(){

        // store.subscribe(()=>console.log("Store is changed: "+store.getState()))

        //subscribe 监听store数据，store被改变就会触发，
        // setState 会重新渲染ui
        store.subscribe(()=>this.setState({
            count:store.getState()
        }))

        return (
            <div className="container">
                <h1 className="text-center mt-5">{store.getState()}</h1>
                <p className="text-center">
                    <button onClick={this.handleIncrement} className="btn btn-primary mr-2">Increase</button>
                    <button onClick={this.handleDecrement} className="btn btn-danger my-2">Decrease</button>
                </p>
            </div>


        )
    }
}
