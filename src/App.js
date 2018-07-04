import React, {Component} from 'react'
import { store, actions } from './reduce/reducer'
import { Router } from '@reach/router'
import './class-generic.css'
import './index.css'

import Page1 from './components-pages/Page1'
import Page2 from './components-pages/Page2'
import Page3 from './components-pages/Page3'
import Page4 from './components-pages/Page4'
import SpotsSearch from './components-pages/SpotsSearch'
import MenuCategory from './components-pages/MenuCategory'
import SelectMenu from './components-pages/SelectMenu'
import CommandePage from './components-pages/CommandePage'
import LogOut from './components-pages/LogOut'
import SlideMenu from './components-slide/SlideMenu'
import SlideItem from './components-slide/SlideItem'

class App extends Component {
  constructor () {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
    actions.getPlace()
  }

  render () {
    return (
      <React.Fragment>
        <SlideMenu {...this.state} />
        <SlideItem {...this.state} />
        <Router>
          <Page1 {...this.state} path='/' component={Page1} />
          <Page2 {...this.state} path='/connection' component={Page2} />
          <Page3 {...this.state} path='/connect-spot' component={Page3} />
          <Page4 {...this.state} path='/connect-nfc' component={Page4} />
          <SpotsSearch {...this.state} path='/spots-search' component={SpotsSearch} />
          <MenuCategory {...this.state} path='/menu-category/:id' component={MenuCategory} />
          <SelectMenu {...this.state} path='/menu/:id/:category' component={SelectMenu} />
          <CommandePage {...this.state} path='/commande-page' component={CommandePage} />
          <LogOut {...this.state} path='/logout' component={LogOut} />
        </Router>
      </React.Fragment>
    )
  }
}

export default App
