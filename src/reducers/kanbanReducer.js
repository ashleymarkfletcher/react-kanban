const initialState = {
  lists:[]
}

export default function kanbanReducer(state = initialState, action) {

  switch (action.type) {

    case 'ADD_LIST': {

      console.log('here', action, state.lists);

      let newState =  JSON.parse(JSON.stringify(state))

      // let listIndex = newState.lists.findIndex((list) => {
      //   return action.payload.id == list.id
      // })
      //
      // if (lists) {
      //
      // }

      newState.lists.push(action.payload)

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
