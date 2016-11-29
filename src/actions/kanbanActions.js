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
