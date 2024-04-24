import React, { useEffect, useState } from 'react'
import Creation from '../../components/creation-bar/Creation'
import { createUser } from '../../redux/actions/createAction'
import { connect, useSelector } from 'react-redux'
import { getRooms } from '../../redux/actions/getAction'
import { Card } from 'antd'

const Room = (props) => {
  const [room, setName] = useState('')
  const handleCreate = (e) => {
    e.preventDefault()
    props.createUser({ room }, '/room/')
    setName('')
  }

  useEffect(() => {
    props.getRooms()
  }, [handleCreate])

  const rooms  = useSelector(state => state.getRooms.xonalar)

  console.log(rooms);

  return (
    <div>
      <Creation name={room} setName={setName} onSubmitCapture={handleCreate} title={'Xonalar'} count={100} />
      <div className="card-grid">
        {
          rooms?.map((room, index) =>
          <Card>
            <h2>{room.room}</h2>
          </Card>
          )
        }
      </div>
    </div>
  )
}

export default connect(null, { createUser, getRooms })(Room)