export function addList(list) {
  console.log('addlist!', list);
  return {
    type: 'ADD_LIST',
    payload: list
  }
}

export function addTask(name, listID) {
  console.log('addtask!', name, listID);
  return {
    type: 'ADD_TASK',
    payload: {
      name: name,
      listID: listID
    }
  }
}

export function toggleEditTask(taskID) {
  console.log('toggleTask!', taskID);
  return {
    type: 'TOGGLE_EDIT_TASK',
    payload: taskID
  }
}

export function toggleEditList(listID) {
  console.log('toggleEditList!', listID);
  return {
    type: 'TOGGLE_EDIT_LIST',
    payload: listID
  }
}
