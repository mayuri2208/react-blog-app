import React from 'react'
import Logo from '../../Logo'
import Navbar from '../../Navbar'
import './style.css'

export default function Card(props) {
  return (
    <div className="card">
        <div style={{padding: "50px 0"}}>
        <Logo />
        </div>
        <Navbar />
    </div>
  )
}
