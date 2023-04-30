import React, { useState } from 'react'
import './Plan.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'

const Plan = () => {
    const user = useSelector(selectUser)
    const plans = [
        {
            name:"Netflix Standard",
            description:"1080p",
            price:699
        },
        {
            name:"Netflix Basic ",
            description:"480p",
            price:499
        },
        {
            name:"Netflix Premium",
            description:"4K+HDR",
            price:999
        },
    ]
    // Netflix Standard - 1080p
    // Netflix Basic - 480p
    // Netflix Premium - 4K+HDR
    const loadCheckout = (name,price)=>{
        const successUrl = window.location.origin;
        const cancelUrl = window.location.origin;
    }

  return (
    <div className='plans'>
      {plans.map((ele)=>(
        <div className="plans_plan">
        <div className="plans_info">
            <h5>{ele.name}</h5>
            <h6>{ele.description}</h6>
        </div>

        <button onClick={loadCheckout(ele.name,ele.price)}>Subscribe</button>
      </div>
      ))}
    </div>
  )
}

export default Plan
