import './App.css';
import { connect } from 'react-redux'
import {updateUser, addUser, deleteUser} from './actions/userAction'
function App(props) {
  console.log("App PROPS=> ", props)
  return (
    <div className="App">
      <h1>App Component</h1>
      {props.userReducer}
      <br />
      <button onClick={()=>props.updateUser("Tom")}>UPDATE USER</button>
      <button onClick={()=>props.addUser("Jill")}>ADD USER</button>
      <button onClick={()=>props.deleteUser()}>DELETE USER</button>
    </div>
  );
}
const mapDispatchToProps ={
  updateUser, addUser, deleteUser
}
const mapStateToProps = state =>{
  return state
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
