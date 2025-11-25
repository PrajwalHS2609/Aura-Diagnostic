import React from 'react'
import "./ServiceNav.css"
import Link from 'next/link'
const ServiceNav = () => {
  return (
    <div className='serviceNav-container'>
      <div className="serviceNav-content">
        <ul>
            <li>Quick Links</li>
            <li><Link href="#expect">What to expect</Link></li>
            <li><Link href="#result">Accessing results</Link></li>
            <li><Link href="#getting">Getting here</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default ServiceNav
