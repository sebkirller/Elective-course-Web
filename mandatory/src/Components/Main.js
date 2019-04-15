import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import DriverList from './DriverList'
import RaceResults from './RaceResults'
import RaceSchedule from './RaceSchedule'
import LapTimes from './LapTimes'

class Main extends Component {

  render() {
    return (
      <main>
        <div className='row mr-0'>
          <div className='col-1'></div>
          <div className='col-8'>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route path='/DriverList' component={DriverList}></Route>
              <Route path='/RaceResults' component={RaceResults}></Route>
              <Route path='/RaceSchedule' component={RaceSchedule}></Route>
              <Route path='/LapTimes' component={LapTimes}></Route>
            </Switch>
          </div>
        </div>
      </main>
    )
  }
}

export default Main
