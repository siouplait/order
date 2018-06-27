import React, {Component} from 'react'
import { Router } from "@reach/router"
import './class-generic.css'
import './App.css'

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
  render() {
    return (
      <Router>
        <Page1 path='/' component={Page1}/>
        <Page2 path='/Connection' component={Page2}/>
        <Page3 path='/ConnectSpot' component={Page3}/>
        <Page4 path='/ConnectNfc' component={Page4}/>
        <SpotsSearch path='/SpotsSearch' component={SpotsSearch}/>
        <MenuCategory path='/MenuCategory' component={MenuCategory}/>
        <SelectMenu path='/Menu' component={SelectMenu}/>
        <CommandePage path='/CommandePage' component={CommandePage}/>
        <LogOut path='/LogOut' component={LogOut}/>
      </Router>
    )
  }
}

export default App
