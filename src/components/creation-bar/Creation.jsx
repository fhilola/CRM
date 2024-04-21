import React from 'react'
import './Creation.scss'
import { useState } from 'react'
import { Btn } from '../../utils/Utils'
import {Drawer, Button, Form, Select, Input} from 'antd'

const Creation = ({ title, count }) => {
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
            <Drawer
                        title="Foydalanuvchi yaratish"
                        placement={'right'}
                        closable={true}
                        onClose={onClose}
                        open={open}
                        key={placement}
                    >
                        <Form
                            layout={'vertical'}
                            form={form}
                            initialValues={{
                                layout: 'vertical',
                            }}
                        >
                            <Form.Item label="Foydalanuvchi nomi">
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Form.Item label="Parol">
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Form.Item label="Status">
                                <Select
                                    defaultValue="Status"
                                    style={{
                                        width: 'full',
                                    }}
                                    options={[
                                        {
                                            value: 'manager',
                                            label: 'Manager',
                                        },
                                        {
                                            value: 'assist',
                                            label: 'Assist',
                                        },
                                        {
                                            value: 'ustoz',
                                            label: 'Ustoz',
                                        },
                                        {
                                            value: 'oquvchi',
                                            label: "O'quvchi",
                                        }

                                    ]}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType="submit" type="primary">Submit</Button>
                            </Form.Item>
                        </Form>
                    </Drawer>
        </div>
    )
}

export default Creation