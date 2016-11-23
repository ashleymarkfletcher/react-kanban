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

            case 'ADD_TASK':
              console.log('here', action, state.lists);
              let newState =  JSON.parse(JSON.stringify(state))

              let index = newState.lists.findIndex((list) => {
                console.log('list', list.id);
                return list.id === action.payload.listID
              })

              console.log('index', index);

              newState.lists[index].items.push({id:action.payload.name, body:action.payload.name})

        return newState

    default:
    console.log('statechange!', state);
      return state;
  }
}
