import React, { useEffect, useState } from 'react'
import './Main.scss'
import { Card } from 'antd'
import { connect, useSelector } from 'react-redux'
import { getGroup, getRooms, getSubjects, getUsers } from '../../redux/actions/getAction'
import { PiUsersThree } from "react-icons/pi";

const Main = (props) => {
  useEffect(() => {
    props.getUsers()
    props.getGroup()
    props.getSubjects()
    props.getRooms()
  }, [])
  const output = useSelector(state => state.getUser)
  const groups  = useSelector(state => state.getGroup)
  const subjects  = useSelector(state => state.getSubjects)
  const rooms= useSelector(state => state.getRooms)
  const data = []


  data.push(output, groups, subjects, rooms)
  return (
    <div className='card-grid'>
      {
        data?.map((card, index)=>
        card !== null ? <Card key={index} className='card'>
          <span className='icon-span'><PiUsersThree/></span>
          <h2>{card ? Object.keys(card)[0].toUpperCase() : ''}</h2>
          <strong>Jami: {Object.values(card)[0] ? Object.values(card)[0].length : 'hichnarsa yoq'}</strong>
        </Card> : console.log('nullga teng')
        
        )
      }
    </div>
  )
}

export default connect(null, { getUsers, getGroup, getSubjects, getRooms })(Main)