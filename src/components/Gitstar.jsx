import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

const getData = (query) =>{
  return axios.get(`https://api.github.com/search/repositories?q=stars:%3E1+language:${query}`)
}
const Gitstar = () => {
   const [query, setQuery] = useState("ALL")
    const [data, setData] = useState([])
  
useEffect(()=>{
  getData(query).then((res)=>setData(res.data.items))
},[query])
console.log(data)



  return (
    <div>
        <h1>React Application</h1>
      <div style={{justifyContent:"space-between"}}>
      <button onClick={()=>setQuery("ALL")}>ALL</button>
       <button onClick={()=>setQuery("HTML")}>HTML</button>
       <button onClick={()=>setQuery("CSS")}>CSS</button>
       <button onClick={()=>setQuery("javascript")}>Javascript</button> 
      </div>
      <br />
      <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"3rem"}}>
        {
          data.map((el)=>(
            <div key={el.id}>
              <img style={{width:"250px"}} src={el.owner.avatar_url} alt="" />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Gitstar