import { createStore } from 'redux'

const initialState = {
  places: [],
  place: {},
  food_category: [],
  order: [],
  menuOpen: false,
  itemOpen: false,
  product: {}
}

const reducers = (state, action) => {
  switch (action.type) {
    case 'GET_PLACES':
      return { ...state, places: action.places }
    case 'GET_INFO_PLACE':
      return { ...state, place: action.place }
    case 'GET_CATEGORY_PLACE':
      return {
        ...state,
        food_category: [
          {
            id: undefined,
            name: 'Tous',
            image: state.place.logo.full
          },
          ...action.food_category]
      }
    case 'SWITCH_MENU_SLIDE':
      return { ...state, itemOpen: false, menuOpen: !state.menuOpen }
    case 'SWITCH_ITEM_SLIDE':
      return { ...state, menuOpen: false, itemOpen: !state.itemOpen, product: action.product }
    case 'UPDATE_ORDER':
      const orderedItem = state.order.find(e => e.id === action.order.id)
      if (orderedItem) {
        return {
          ...state,
          order: state.order.map(e => e.id === orderedItem.id
            ? { ...orderedItem, qty: orderedItem.qty + action.num <= 0 ? 0 : orderedItem.qty + action.num }
            : e)
        }
      }
      return { ...state, order: [...state.order, { ...action.order, qty: action.num < 0 ? 0 : action.num }] }
    case 'CLEAN_ORDER':
      return { ...state, order: state.order.filter(e => e.qty !== 0) }
    default:
      return state
  }
}

export const actions = {
  getPlace: () =>
    fetch('https://dev.siouplait.com/api/v1/places/')
      .then(res => res.json())
      .then(data => store.dispatch({type: 'GET_PLACES', places: data.places})),

  getInfoPlace: (id) => {
    fetch(`https://dev.siouplait.com/api/v1/places/${id}`)
      .then(res => res.json())
      .then(data => store.dispatch({ type: 'GET_INFO_PLACE', place: data.place }))
      .then(data => store.dispatch({
        type: 'GET_CATEGORY_PLACE',
        food_category: data.place.card.categories
      }))
  },

  switchMenu: () => store.dispatch({ type: 'SWITCH_MENU_SLIDE' }),
  switchItem: (product) => store.dispatch({ type: 'SWITCH_ITEM_SLIDE', product }),
  updateOrder: (order, num) => store.dispatch({ type: 'UPDATE_ORDER', order, num }),
  cleanOrder: () => store.dispatch({ type: 'CLEAN_ORDER' })
}

export const store = createStore(reducers, initialState)
