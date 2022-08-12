import React from 'react'
import "../Sections/Karzinka.css"
import {useSelector,useDispatch} from "react-redux"

export default function Korzinka() {
  const data = useSelector(state=>state.card)
  const dispatch = useDispatch()
  let sums = 0

  function deleteFun(item){
    dispatch({type:"deleteitem",payload:item})
  }
  function increment(item){
    dispatch({type:"increment",payload:item})
  }
  function decrement(item){
    dispatch({type:"decrement",payload:item})
  }
  return (
    <div className='container mt-5'>
      {
        (data !== undefined) ? (
          data.map((item,index)=>{
            let sum = item.counter*item.cost
            sums= sums+sum
            return(
              <div key={index} className="main">
                <div className=" karzinka shadow">
                  <div className='img__karzika'>
                    <img className='shadow' src={item.img_src} alt="" />
                  </div>
                  <div className='count__section'>
                    <button onClick={()=>decrement(item)} className='btn btn-danger'>-</button>
                    <h4 className='mx-2'>{item.counter}</h4>
                    <button onClick={()=>increment(item)} className='btn btn-primary'>+</button>
                  </div>
                  <div className='coat__name'>
                    <h5>Nomi: <span>{item.name}</span></h5>
                    <h5>Narxi: <span>{item.cost}$</span></h5>
                    <h4>All cost: <span>{Number(item.cost*item.counter)}$</span></h4>
                  </div>
                </div>
                <div className='icon__del'>
                    <i onClick={()=>deleteFun(index)} class="fa-solid fa-trash"></i>
                </div>
              </div>
            )
          })
        ) : (
          <h3>Loading...</h3>
        )
      }
      <h4 className='allCost'>Umumiy summa:{sums}</h4>
    </div>
  )
}


