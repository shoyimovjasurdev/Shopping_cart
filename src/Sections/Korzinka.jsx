import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "../Sections/Karzinka.css"

export default function Korzinka() {
  const [data, setData]=useState([])
  const [count, setCount]=useState(1)
  let sum = 0
  

  useEffect(()=>{
    let date = localStorage.getItem("massiv")
    setData(JSON.parse(date))
  }, [])
  
    

  function delFun(index){
    let massiv = []
      massiv = data
      massiv.splice(index,(1))
      localStorage.setItem("massiv",JSON.stringify(massiv))
      console.log(massiv)
  }
  
  return (
    <div className='container '>
      {
        (data.length) && data.map((e,index)=>{
          sum= sum + Number(e.cost)
          return(
            <div key={index} className="card karzinka shadow">
              <div className='img__karzika'>
                <img className='shadow' src={e.img_src} alt="" />
              </div>
              <div className='count__section'>
                <button onClick={()=>{
                  (count>1)? (setCount(count-1)): (setCount(count))
                  }} className='btn btn-danger'>-</button>
                <h4>{count}</h4>
                <button onClick={()=>{setCount(count+1)}} className='btn btn-primary'>+</button>
              </div>
              <div className='coat__name'>
                <h4>Nomi: {e.name}</h4>
                <h4>Narxi: {e.cost}$</h4>
                <h4>SUM: {Number(e.cost)*count}$</h4>
              </div>
              <div className='icon__del' onClick={()=>delFun(index)}>
                <i  onClick={()=>delFun(index)} class="fa-solid fa-trash"></i>
              </div>
            </div>
          )
        })
      }
      <div>UMUMIY SUMMA <b>{sum*count}</b></div>
    </div>
  )
}
