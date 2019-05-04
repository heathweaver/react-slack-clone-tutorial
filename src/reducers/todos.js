import { CommentAction } from "semantic-ui-react";

const initialState = {
  data: []
};

const todos = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
    return {
      ...state,
      data: [...state.data, {id: Math.random(), text: action.text}]
    }

    case 'DELETE_TODO':
      return {}

    dafult:
      return state      
  }
};

export default todos;