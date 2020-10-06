import React, {
 useState
} from 'react'

function useToggleState(initialVal = false) {
 const [logicalData, setBoolean] = useState(initialVal);
 const toogle = () => {
  setBoolean(!logicalData);
 }
 return [logicalData, toogle]

}

export default useToggleState