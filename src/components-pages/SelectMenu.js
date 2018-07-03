import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchMenu } from "../Actions";
import PageTemplate from '../components-modules/PageTemplate';
import Input from '../components-modules/Input';
import Itemblock from '../components-modules/Itemblock';
import Headertext from '../components-modules/Headertext';

import btnSearch from '../icon/btn_search.svg';

class SelectMenu extends React.Component {

  componentDidMount(){
    this.props.fetchMenu();
  }

  renderMenu(){
    return _.map(this.props.menu, menu => {
      return (
        <Itemblock src={menu.custom_image}>
          {menu.custom_name} <br/>
          {menu.price}€
        </Itemblock>
      )
    })
  }


  render(){
    return(
      <PageTemplate nav className="s-bg-white">
        <div full className="s-d-flex1">
          <Headertext title="Munchies" subtitle="CATEGORY NAME" />
          <Input
            icon={btnSearch}
            width="17em"
            iconHeight="1.3em"
            placeholder="Search"
          />
        </div>
        <div full className="s-d-flex">
          {this.renderMenu()}
        </div>
      </PageTemplate>
    )
  }
}

function mapStateToProps(state) {
  return { menu: state.menu }
}

export default connect(mapStateToProps, { fetchMenu })(SelectMenu)
