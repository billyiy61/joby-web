import React, {Component} from 'react'
import './styles/App.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './index';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = ({target: {value, id}}) => {
    this.setState({
      [id]: value
    })
  };
    
  signInAccount = () => {
    const {email, password} = this.state;
    signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    console.log(auth, email, password);
  };

  render(){
    return(
      <div>
        <div className="login_block">
          <input className="imp" 
                type="text"
                placeholder="login"
                id="email"
                onChange={this.handleChange}
                />
          <input className="imp" 
                type="password"
                id="password"
                placeholder="password"
                onChange={this.handleChange}/>
          <input
                type="submit"
                content='создать'
                onClick={this.signInAccount}
                />
        </div>
      </div>
    )
  }
}
