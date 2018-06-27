import React, {Component} from 'react'
// import SwipeableViews from 'react-swipeable-views'
import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './class-generic.css'

import Page1 from './components-pages/Page1'
import Page2 from './components-pages/Page2'
import Page3 from './components-pages/Page3'
import Page4 from './components-pages/Page4'
import SpotsSearch from './components-pages/SpotsSearch'
import MenuCategory from './components-pages/MenuCategory'
import SelectMenu from './components-pages/SelectMenu'
import CommandePage from './components-pages/CommandePage'
import LogOut from './components-pages/LogOut'

// import SupportTouch from 'docs/src/modules/components/SupportTouch';

class App extends Component {
  render () {
    return (
     <BrowserRouter>
       <Switch>
         <Route exact path='/' component={Page1}/>
         <Route path='/Connection' component={Page2}/>
         <Route path='/ConnectSpot' component={Page3}/>
         <Route path='/ConnectNfc' component={Page4}/>
         <Route path='/SpotsSearch' component={SpotsSearch}/>
         <Route path='/MenuCategory' component={MenuCategory}/>
         <Route path='/Menu' component={SelectMenu}/>
         <Route path='/CommandePage' component={CommandePage}/>
         <Route path='/LogOut' component={LogOut}/>
       </Switch>
     </BrowserRouter>
    )
  }
}
export default App
