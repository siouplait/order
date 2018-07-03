import { FETCH_MENU } from "../Actions";

export default function(state= {}, action) {
  switch (action.type){
    case FETCH_MENU:
      return action.payload.data.place.card.products;
    default:
      return state;
  }
}
