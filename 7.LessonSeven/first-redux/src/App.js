import './App.css';
import { createStore } from 'redux'

function reducer (state, action){
  console.log("Action parameters =>", action)
  if(action.type ==='changeTheState'){
    return action.payload.newState
  }
  return 'State12346'
}
const myStore = createStore(reducer)
console.log('OLD State=>',myStore.getState())

const action = { type:'changeTheState', payload:{newState:"My new State..."}}

myStore.dispatch(action)
myStore.dispatch(action)
myStore.dispatch(action)
myStore.dispatch(action)
console.log('NEW State=>',myStore.getState())
function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
    </div>
  );
}

export default App;
