import React, { useEffect, useState } from 'react'
import './Main.scss'
import { Card } from 'antd'
import { connect, useSelector } from 'react-redux'
import { getGroup, getRooms, getSubjects, getUsers } from '../../redux/actions/getAction'
import { PiUsersThree } from "react-icons/pi";
import { LiaLayerGroupSolid } from "react-icons/lia";
import { AiOutlineRead, AiOutlineGroup } from "react-icons/ai";
import { Skeleton as AntSkeleton } from 'antd';
import Loading from '../../components/loading/Loading'

const Main = (props) => {
  const data = []
  useEffect(() => {
    props.getUsers()
    props.getGroup()
    props.getSubjects()
    props.getRooms()
  }, [data])
  const output = useSelector(state => state.getUser)
  const groups = useSelector(state => state.getGroup)
  const subjects = useSelector(state => state.getSubjects)
  const rooms = useSelector(state => state.getRooms)


  data.push(output, groups, subjects, rooms)
  return (
    <div className='card-grid'>
      {
        data?.map((card, index) =>
        Object.values(card)[1] !==false ? <AntSkeleton/> :
          card !== null ? <Card key={index} className='card'>
            <span className='icon-span'>{Object.keys(card)[0] === 'foydalanuvchilar' ? <PiUsersThree/> : Object.keys(card)[0] === 'guruhlar' ? <AiOutlineGroup/> : Object.keys(card)[0] === 'fanlar' ? <AiOutlineRead/> : Object.keys(card)[0] === 'xonalar' ? <LiaLayerGroupSolid/> :''}</span>
            <h2>{card ? Object.keys(card)[0].toUpperCase() : ''}</h2>
            <strong>Jami: {Object.values(card)[0] ? Object.values(card)[0].length : 'null'}</strong>
          </Card> : ''

        )
      }
    </div>
  )
}

export default connect(null, { getUsers, getGroup, getSubjects, getRooms })(Main)