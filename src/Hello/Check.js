import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Try from './Try';



class Check extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if(token == null){
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }
   

    render(){
        if(this.state.loggedIn===true)
        {
            return <Redirect to = "/Try" />
        }
       

}
}

export default Check;