import React, { useState } from 'react'
import Creation from '../../components/creation-bar/Creation'

const Subject = (props) => {
  const [name, setName] = useState('')
  const handleCreate = (e) => {
    
  }
  return (
    <div>
      <Creation title={'Fanlar'} count={100}/>
    </div>
  )
}

export default Subject