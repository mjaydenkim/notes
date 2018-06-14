let defaultState = {items:[]}
export default function (state = defaultState, action) {
  switch (action.type) {
    case 'ADD_LIST_ITEM':
      return {
        ...state,
        items:[...state.items, action.payload.item]
      }
    default:
      return state;
  }
};