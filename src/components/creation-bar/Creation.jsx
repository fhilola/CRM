import React from 'react'
import './Creation.scss'
import { useState } from 'react'
import { Btn } from '../../utils/Utils'
import { Form } from 'antd'
import Drawer from '../../layout/drawer/Drawer'

const Creation = ({ name, setName, username, setUsername, setPassword, password ,onSubmitCapture, handleChange, title, count, fee, setFee }) => {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('right');
    const [form] = Form.useForm();
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <div className='creation'>
            <div className='content'>
                <h2 className='title'>{title}</h2>
                <strong>Miqdor - {count}</strong>
            </div>
            <Btn onClick={showDrawer} appearance='primary'>Yaratish</Btn>
            <Drawer username={username} setUsername={setUsername} setPassword={setPassword} password={password} name={name} setName={setName} title={title} placement={placement} open={open} onClose={onClose} form={form} onSubmitCapture={onSubmitCapture} fee={fee} setFee={setFee} handleChange={handleChange}/>
        </div>
    )
}

export default Creation