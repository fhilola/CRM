import React from 'react'
import { Card as AntCard } from 'antd';

const Card = ({text, data, name, fee}) => {
  return (
    <AntCard style={{ width: '100%' }}>
    <h1>{name? name : 'Guruh nomi'}</h1>
    {
      fee ? <strong>{fee !== 0 ? fee : '100000'}USD</strong> : ''
    }
  </AntCard>
  )
}

export default Card