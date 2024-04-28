import React from 'react'
import './Loading.scss'

const Loading = () => {
  return (
    <div className='loading'>
        <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loading