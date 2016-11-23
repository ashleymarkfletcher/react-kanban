export function addList(name) {
  console.log('addlist!', name);
  return {
    type: 'ADD_LIST',
    payload: name
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
