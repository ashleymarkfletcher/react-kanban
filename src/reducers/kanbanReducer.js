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

    case 'ADD_LIST':
      console.log('here', action, state.lists);
      return Object.assign({}, state, {
              lists: [
                ...state.lists,
                {
                  id:3,
                  title:action.payload
                }
              ]
            })

    default:
    console.log('statechange!', state);
      return state;
  }
}
