import React, { useState } from 'react'
import Creation from '../../components/creation-bar/Creation'
import { createUser } from '../../redux/actions/createAction'
import { connect } from 'react-redux'

const Room = (props) => {
  const [room, setName] = useState('')
  const handleCreate = (e) => {
    e.preventDefault()
    props.createUser({room}, '/room/')
  }
  return (
    <div>
      <Creation name={room} setName={setName} onSubmitCapture={handleCreate} title={'Xonalar'} count={100}/>
    </div>
  )
}

export default connect(null, { createUser })(Room)