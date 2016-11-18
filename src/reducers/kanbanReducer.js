const initialState = {
  lists:[
    {
      id:1,
      title:'title 1',
      items:[
        {
          id:1,
          body:'task 1'
        },
        {
          id:2,
          body:'task 2'
        },
        {
          id:3,
          body:'task 3'
        }
      ]
    },
    {
      id:2,
      title:'title 2',
      items:[
        {
          id:1,
          body:'task 1'
        },
        {
          id:2,
          body:'task 2'
        },
        {
          id:3,
          body:'task 3'
        }
      ]
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
