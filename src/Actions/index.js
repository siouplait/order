import axios from 'axios';

const RootURL = "https://dev.siouplait.com/api/v1/places/5ae0e3bc1003154d5d5c0e74";
export const FETCH_MENU = 'fetch_menu';

export function fetchMenu() {
  const request = axios.get(RootURL);

  return {
    type: FETCH_MENU,
    payload: request
  };
}

