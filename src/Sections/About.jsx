import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect,useState } from 'react'
import Axios from 'axios'

export default function About() {
  const loc = useLocation()
  const [select, setSelect]=useState([])

  useEffect(()=>{
    getStudent()
  }, [])

 function getStudent(){
  Axios.get("http://myjson.dit.upm.es/api/bins/j8nl")
    .then(ress=>{
      let arre = ress.data.filter(e=>{
        return(e.id == loc.state.id)
      })
      setSelect(arre)
    })
    .catch(err =>{
      console.log(err);
  })
  }

  console.log(select[0])

  return (
    <div className='container card shadow mt-5'>
      {
        (select.length > 0 ) ? (
      <div className='row text-center  my-5'>
        <div className='col-sm-12 col-md-6 mt-3'>
          <img width="300" src={select[0].img_src} alt="rasim" />
        </div>
        <div className='col-sm-12 col-md-6 mt-3 text-center'>
          <h4 className='mb-5'>Name: <b>{select[0].name}</b></h4>
          <h4 className='mb-5'>Cost: <b>{select[0].cost}$</b></h4>
          <h4 className=''>Id: <b>{select[0].id}</b></h4>
        </div>
      </div>

        ) :
        (
          <h4 className='text-center'>loading...</h4>
        )
      }
    </div>
  )
}
