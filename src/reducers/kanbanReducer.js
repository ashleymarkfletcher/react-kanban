const initialState = {
  lists:[
    {
      id:1,
      title:'title 1'
    },
    {
      id:2,
      title:'title 2'
    }
  ]
}

export default function kanbanReducer(state = initialState, action) {
  switch (action.type) {

    case 'types.ADD_FRIEND':
      const newId = state.friends[state.friends.length-1] + 1;
      return {
        friends: state.friends.concat(newId),
        friendsById: {
          ...state.friendsById,
          [newId]: {
            id: newId,
            name: action.name
          }
        }
      }

    default:
      return state;
  }
}
