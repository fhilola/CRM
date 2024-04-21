import React from 'react'
import './Utils.scss'

const Btn = ({children, onClick, type, appearance}) => {
  return (
    <button onClick={onClick} type={type} className={`btn ${appearance}`}>{children}</button>
  )
}

export {Btn}