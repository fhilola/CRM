import React, { useState } from 'react'
import Creation from '../../components/creation-bar/Creation'
import { connect } from 'react-redux'
import { createUser } from '../../redux/actions/createAction'

const Subject = (props) => {
  const [name, setName] = useState('')
  const [fee, setFee] = useState(0)
  const handleCreate = (e) => {
    e.preventDefault()
    props.createUser({name, fee}, '/subject/')
  }
  return (
    <div>
      <Creation title={'Fanlar'} count={100} name={name} setName={setName} onSubmitCapture={handleCreate} fee={fee} setFee={setFee}/>
    </div>
  )
}

export default connect(null, { createUser })(Subject)