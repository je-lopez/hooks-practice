import { ADD_TODO, COMPLETE_TODO, EDIT_TODO, DELETE_TODO, RESET } from './types';

const appReducer = (state, action) => {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];
    case COMPLETE_TODO:
      return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed,
          };
        }

        return item;
      });
    case EDIT_TODO:
      return state.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            text: action.payload.text,
          };
        }

        return item;
      });
    case DELETE_TODO:
      return state.filter(item => item.id !== action.payload);
    case RESET:
      return action.payload;
    default:
      return state;
  }
};

export default appReducer;
