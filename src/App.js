import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  // if-else statement(adding inside the function)
  //   renderAuthButton = () => {
  //     const {isLoggedIn} = this.state
  //     if (isLoggedIn === true) {
  //       return <button type="button">Logout</button>
  //     }
  //     return <button type="button">Login</button>
  //   }

  // if-else statement(adding inside the render)
  //   render() {
  //     const {isLoggedIn} = this.state
  //     let authButton
  //     if (isLoggedIn === true) {
  //       authButton = <button type="button">Logout</button>
  //     } else {
  //       authButton = <button type="button">Login</button>
  //     }
  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="container">
        <Welcome greeting="Hi" />
        {/* <Welcome greeting="Hello" name="User" /> */}
        {/* {authButton}if-else statement(adding inside the render)/}
        {/{this.renderAuthButton()}if-else statement(adding inside the function) */}
        {/* {isLoggedIn ? <button type="button">Logout</button> : null}using ternary operator */}

        {/* // logical operator */}
        {isLoggedIn && <button type="button">Logout</button>}
        {!isLoggedIn && <button type="button">Login</button>}
      </div>
    )
  }
}

export default App
