import React from 'react'
import './Creation.scss'
import { useState } from 'react'
import { Btn } from '../../utils/Utils'
import { Button, Form, Select, Input} from 'antd'
import Drawer from '../../layout/drawer/Drawer'

const Creation = ({grupname, setGroupname, onSubmitCapture, title, count,  }) => {
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
            <Drawer grupname={grupname} setGroupname={setGroupname} title={title}  placement={placement} open={open} onClose={onClose} form={form} onSubmitCapture={onSubmitCapture}/>
        </div>
    )
}

export default Creation