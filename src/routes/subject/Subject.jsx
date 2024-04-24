import React, { useEffect, useState } from 'react'
import Creation from '../../components/creation-bar/Creation'
import { connect, useSelector } from 'react-redux'
import { createUser } from '../../redux/actions/createAction'
import {getSubjects} from '../../redux/actions/getAction'
import Card from '../../components/card/Card'

const Subject = (props) => {
  const [name, setName] = useState('')
  const [fee, setFee] = useState(0)
  const handleCreate = (e) => {
    e.preventDefault()
    props.createUser({name, fee}, '/subject/')
  }
  useEffect(()=>{
    props.getSubjects()
  }, [handleCreate])

  const {subjects}= useSelector(state => state.getSubjects.subjects)
  return (
    <div>
      <Creation title={'Fanlar'} count={100} name={name} setName={setName} onSubmitCapture={handleCreate} fee={fee} setFee={setFee}/>


      <div className="card-grid">
        {
          subjects?.map((subject, index)=>
          <Card key={index} name={subject.name} fee={subject.fee}/>
          )
        }
      </div>
    </div>
  )
}

export default connect(null, { createUser, getSubjects })(Subject)