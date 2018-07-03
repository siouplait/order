import { combineReducers } from 'redux';
import MenuReducer from './menu_reducer';

const RootReducer = combineReducers({
  menu: MenuReducer
});

export default RootReducer;
