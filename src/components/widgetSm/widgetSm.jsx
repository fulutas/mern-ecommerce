import React from 'react'
import './widget-sm.css'
import { Visibility } from '@mui/icons-material'

const widgetSm = () => {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&h=191.25&fit=crop&w=213.75&dpr=1" alt="" className="widgetSmImg" />
          <div className='widgetSmUser'>
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon' />
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&h=191.25&fit=crop&w=213.75&dpr=1" alt="" className="widgetSmImg" />
          <div className='widgetSmUser'>
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon' />
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&h=191.25&fit=crop&w=213.75&dpr=1" alt="" className="widgetSmImg" />
          <div className='widgetSmUser'>
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon' />
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&h=191.25&fit=crop&w=213.75&dpr=1" alt="" className="widgetSmImg" />
          <div className='widgetSmUser'>
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon' />
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&h=191.25&fit=crop&w=213.75&dpr=1" alt="" className="widgetSmImg" />
          <div className='widgetSmUser'>
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon' />
          </button>
        </li>
      </ul>
    </div>
  )
}

export default widgetSm