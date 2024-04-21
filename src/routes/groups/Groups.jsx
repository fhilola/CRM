import React, { useState } from 'react'
import Creation from '../../components/creation-bar/Creation'
import { connect } from 'react-redux'
import { createUser } from '../../redux/actions/createAction'

const Groups = (props) => {
  const [name, setGroupname] = useState('')
  const handleCreate = (e) => {
    e.preventDefault()
    props.createUser({name}, '/group/')
  }
  return (
    <div>
      <Creation name={name} setGroupname={setGroupname} onSubmitCapture={handleCreate} title={'Guruhlar'} count={100}/>
    </div>
  )
}

export default connect(null, { createUser })(Groups)