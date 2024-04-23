import React, { useEffect, useState } from 'react'
import './Group.scss'
import Creation from '../../components/creation-bar/Creation'
import { connect, useSelector } from 'react-redux'
import { createUser } from '../../redux/actions/createAction'
import { getGroup } from '../../redux/actions/getAction'
import Card from '../../components/card/Card'

const Groups = (props) => {
  const [name, setName] = useState('')
  const handleCreate = (e) => {
    e.preventDefault()
    props.createUser({name}, '/group/')
  }
  useEffect(()=>{
    props.getGroup()
  }, [name])
  const {groups} = useSelector(state => state.getGroup.groups)
  console.log(groups);
  return (
    <div>
      <Creation name={name} setName={setName} onSubmitCapture={handleCreate} title={'Guruhlar'} count={100}/>
      <div className='card-grid'>
        {
        groups?.map((group, index)=>
        <Card key={index} name={group.name}/>
        )
      }
      </div>
    </div>
  )
}

export default connect(null, { createUser, getGroup })(Groups)