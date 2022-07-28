import React from 'react'
import "./featured.css"

function Featured() {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <img src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/57818266.jpg?k=cf1a0ce4f82feae04a8e37cdd8b90b96bdead8e63a4ca2f169acbd4f139cd0d5&o=&hp=1' alt='' className='featuredImg' />
        <div className='featuredTitle'>
          <h1>Dublin</h1>
          <h1>123 properties</h1>
        </div>
      </div>
      <div className='featuredItem'>
        <img src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/57818266.jpg?k=cf1a0ce4f82feae04a8e37cdd8b90b96bdead8e63a4ca2f169acbd4f139cd0d5&o=&hp=1' alt='' className='featuredImg' />
        <div className='featuredTitle'>
          <h1>Austin</h1>
          <h1>532 properties</h1>
        </div>
      </div>
      <div className='featuredItem'>
        <img src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/57818266.jpg?k=cf1a0ce4f82feae04a8e37cdd8b90b96bdead8e63a4ca2f169acbd4f139cd0d5&o=&hp=1' alt='' className='featuredImg' />
        <div className='featuredTitle'>
          <h1>Reno</h1>
          <h1>532 properties</h1>
        </div>
      </div>
    </div>
  )
}

export default Featured