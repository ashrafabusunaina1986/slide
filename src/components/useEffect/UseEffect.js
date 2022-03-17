import React, { useEffect, useLayoutEffect, useRef } from 'react'

function UseEffect() {
    const inputRef=useRef(null)
    useEffect(()=>{
        inputRef.current.value='Hello'
    },[])
    useLayoutEffect(()=>{
        console.log(inputRef.current.value)
    },[])
  return (
    <div>
        <input type="text" ref={inputRef} value='ashraf' />
    </div>
  )
}

export default UseEffect