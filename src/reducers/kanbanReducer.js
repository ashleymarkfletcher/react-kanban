const initialState = {
  lists:[],
  editTaskID: null
}

export default function kanbanReducer(state = initialState, action) {

  switch (action.type) {

    case 'ADD_LIST': {

      console.log('here', action, state.lists);

      let newState =  JSON.parse(JSON.stringify(state))


        let listIndex = newState.lists.findIndex((list) => {
          return list.id === action.payload.id
        })

        if (listIndex !== -1) {
          newState.lists[listIndex] = action.payload
        } else {
          newState.lists.push(action.payload)
        }


      return newState

    }

    case 'ADD_TASK': {

      console.log('here', action, state.lists);

      let newState =  JSON.parse(JSON.stringify(state))

      let index = newState.lists.findIndex((list) => {
        return list.id === action.payload.listID
      })

      newState.lists[index].items.push({id:action.payload.name, body:action.payload.name})

      return newState
    }

    default: {
      return state
    }
  }
}
