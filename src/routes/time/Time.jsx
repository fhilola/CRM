import React, { useState } from 'react'
import Creation from '../../components/creation-bar/Creation'
import { connect } from 'react-redux'
import { createUser } from '../../redux/actions/createAction'

const Time = (props) => {
  const [vaqt, setName] = useState('')
  const [payt, setPayt] = useState('')

  const handleChange = (value)=>{
    setPayt(value)
  }
  const handelCreate = (e) => {
    e.preventDefault()
    props.createUser({vaqt, payt}, '/vaqt/')
  }
  return (
    <div>
      <Creation title={'Vaqt'} count={100} name={vaqt} setName={setName} onSubmitCapture={handelCreate} fee={payt} setFee={setPayt} handleChange={handleChange}/>
    </div>
  )
}

export default connect(null, { createUser })(Time)