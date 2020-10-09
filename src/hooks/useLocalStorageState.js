import {useState,useEffect} from 'react'

function useLocalStorageState(key,defaultVal) {
 const [state, setState] = useState(()=>{
  let val;
  try {
   val=JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
  } catch (e) {
   val=defaultVal;
   console.log("USING", val);
  }
  return val;
 });

useEffect(()=>{
 window.localStorage.setItem(key,JSON.stringify(state))
},[state,key])

 return [state,setState];
}

export default useLocalStorageState
