import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Component } from 'react'
import { AppHeader } from '../../cmps/AppHeader'
import { BookList } from '../../cmps/BookList'



export class BookApp extends Component {


  render() {
    return (
      <Router>
        <div className="main-layout book-app">
          <AppHeader />
          <BookList />
          {/* <Switch>
            <Route component={ContactApp} path='/contact' />
            <Route component={Home} path='/' />
          </Switch> */}
        </div>
      </Router>

    )
  }
}


