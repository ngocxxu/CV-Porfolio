import { ITEM_SHOW, TOGGLE_MENU } from "../const/const";

const initialState = {
  toggleMenu: false,
  itemShow: 2,
}

export const MenuReducer= (state = initialState, action) => {
  switch (action.type) {

  case TOGGLE_MENU:
    state.toggleMenu = action.booleanMenu;
    return { ...state };

  case ITEM_SHOW:
    state.itemShow = action.num ;
    return { ...state };

  default:
    return state
  }
};
