import React, { useEffect, useState } from 'react'
// import Card from '../../components/card/Card'
import { connect, useSelector } from 'react-redux'
import { getGroup, getRooms, getSubjects, getUsers } from '../../redux/actions/getAction'

const Main = (props) => {
  useEffect(() => {
    props.getUsers()
    props.getGroup()
    props.getSubjects()
    props.getRooms()
  }, [])
  const users = useSelector(state => state.getUser.output)
  const groups  = useSelector(state => state.getGroup.groups)
  const subjects  = useSelector(state => state.getSubjects.subjects)
  const rooms = useSelector(state => state.getRooms.rooms)
  const data = []

  data.push(users, groups, subjects, rooms)
  // console.log(data);

  return (
    <div>
      {/* {
        data?.map((card, index)=>
        console.log(card)
        // <Card key={index} data={card} text='Hilola'/>
        )
      } */}
    </div>
  )
}

export default connect(null, { getUsers, getGroup, getSubjects, getRooms })(Main)