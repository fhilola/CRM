import React from 'react'
import { Card as AntCard } from 'antd';

const Card = ({text, data, name}) => {
  return (
    <AntCard style={{ width: 300 }}>
    <h1>{name? name : 'Guruh nomi'}</h1>
    <strong>{data? Object.keys(data) : ''}</strong>
  </AntCard>
  )
}

export default Card