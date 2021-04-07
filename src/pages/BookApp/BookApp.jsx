import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Component } from 'react'
import { Home } from '../Home'

export class BookApp extends Component {
  render() {
    return (
      <Router>
        <div className="main-layout book-app">
          <Switch>
            {/* <Route component={ContactEdit} path='/contact/edit/:id?' />
            <Route component={ContactDetails} path='/contact/:id' />
            <Route component={ContactApp} path='/contact' />
            <Route component={Statistic} path='/statistic' /> */}
            <Route component={Home} path='/' />
          </Switch>
        </div>
      </Router>

    )
  }
}


