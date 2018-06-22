import React, {Component} from 'react'
import SwipeableViews from 'react-swipeable-views'
import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Homepage from './components-pages/Homepage'
import Connect from './components-pages/Connect'
import ConnectSpot from './components-pages/ConnectSpot'
import ConnectNfc from './components-pages/page4_ConnectNfc'

// import SupportTouch from 'docs/src/modules/components/SupportTouch';

class App extends Component {
  render () {
    return (
     <BrowserRouter>
       <switch>
         <Route exact path='/' component={Homepage}/>
         <Route path='/Connect' component={Connect}/>
         <Route path='/ConnectSpot' component={ConnectSpot}/>
         <Route path='/ConnectNfc' component={ConnectNfc}/>
       </switch>
     </BrowserRouter>
    )
  }
}
export default App
