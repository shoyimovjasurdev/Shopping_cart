import React from 'react'
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"



export default function Navbar() {
  const data = useSelector(state=>state.card)
  let navCount = data.length
  return (
    <div className='container '>
      <div className='navbar navbar__section '>
        <div><h3><Link to="/"><i class="fa-solid fa-house-chimney me-2"></i>MAHSULOTLAR</Link></h3></div>
        <div><h3><Link to="/korzinka"><i class="fa-solid fa-cart-shopping me-2"><sup>{navCount}</sup></i>SAVATCHA</Link></h3></div>
      </div>
    </div>
  )
}
