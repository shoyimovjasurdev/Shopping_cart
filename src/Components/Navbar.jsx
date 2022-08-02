import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div className='container'>
      <div className='navbar navbar__section '>
        <div><h3><Link to="/home"><i class="fa-solid fa-house-chimney me-2"></i>MAHSULOTLAR</Link></h3></div>
        <div><h3><Link to="/korzinka"><i class="fa-solid fa-cart-shopping me-2"></i>SAVATCHA</Link></h3></div>
      </div>
    </div>
  )
}
