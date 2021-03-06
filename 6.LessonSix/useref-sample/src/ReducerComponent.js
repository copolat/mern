import React, { useState, useReducer } from 'react'
import { dogReducer } from './reducers/dogReducer'

const myInitialState = {data:"",loading:"",error:""}


function ReducerComponent() {
  /*const [data, setData] = useState("")
  const [loading, setLoad] = useState(false)
  const [error, setError] = useState("")*/
  const [state, dispatch] = useReducer(dogReducer, myInitialState)
  const fetchingDog = () =>{
   /* setLoad(true)
    setError("")
    setData("") */ 
    dispatch({type:"FETCH_START"})
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(result => {
        /*setLoad(false);
        setData(result.message)*/
        dispatch({type:"FETCH_SUCCESS", payload:result.message })
      })
      .catch(()=>{
        /*setError("Error in fetching data...")*/
        dispatch({type:"FETCH_ERROR", payload:"Error in fetching data..." })
      })
  }
  return (
    <div>
      <button onClick={fetchingDog} disabled={state.loading}> Fetch Dog</button>
      {state.data && <div><img src={state.data} alt="Random dog"/></div>}
      {state.error && <p>{state.error}</p>}
    </div>
  )
}

export default ReducerComponent
