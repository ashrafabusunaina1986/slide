import axios from 'axios'
import './slide.css'
import React, { useEffect, useState } from 'react'

function Effect() {
    const [count,setCount]=useState(0)
    const [data,setData]=useState("")
    useEffect(()=>{
        axios.get('https://api.tvmaze.com/shows')
        .then(res=>setData(res.data[count])).catch()
    },[count])
  return (
    <div>
      {data.image!=null? <div>
        <h2>{data.id}- {data.name} </h2>
        
        <img src={data.image.medium} alt="" />
        <p dangerouslySetInnerHTML={{'__html':data.summary}}></p>
      </div>:''}
        
        <button className='left' onClick={()=>setCount(prev=>prev<250?prev+1:prev)}></button>
        <button className='right' onClick={()=>setCount(prev=>(prev>0?prev-1:prev))}> </button>
    </div>
  )
}

export default Effect