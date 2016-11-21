export function addList(name) {
  console.log('addlist!', name);
  return {
    type: 'ADD_LIST',
    payload: name
  }
}
