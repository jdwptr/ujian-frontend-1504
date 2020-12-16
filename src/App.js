import React from 'react'
import Axios from 'axios'

// import components
import Navigation from './components/navbar'

import {Switch, Route} from 'react-router-dom'

import { connect } from 'react-redux'

// import login dari actions
import { login } from './action'

// import halaman dari pages
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import DetailBeli1 from './pages/detailbeli1'
import DetailBeli2 from './pages/detailbeli2'
import DetailBeli3 from './pages/detailbeli3'
import DetailBeli4 from './pages/detailbeli4'
import CartPage from './pages/cartpage'

class App extends React.Component {

  componentDidMount () {
    Axios.get(`http://localhost:2000/users?email=${localStorage.getItem('email')}`)
      .then((res) => {
        console.log(res.data[0])
        this.props.login(res.data[0])

      })
      .catch((err) => console.log(err))
  }

  render () {
    return (
      <div>
        <Navigation/>
          <Switch>
            <Route path= '/' component={Home} exact/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/detail1' component={DetailBeli1}/>
            <Route path='/detail2' component={DetailBeli2}/>
            <Route path='/detail3' component={DetailBeli3}/>
            <Route path='/detail4' component={DetailBeli4}/>
            <Route path='/cart' component={CartPage}/>
          </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.user.email
  }
}

export default connect (mapStateToProps, {login}) (App)