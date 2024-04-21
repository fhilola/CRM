import React from 'react'
import { Drawer as AntDrawer, Button, Form, Input, Select } from 'antd'
import { useLocation } from 'react-router-dom'

const Drawer = ({ title, placement, onClose, open, form, onSubmitCapture, username, setUsername, password, setPassword, handleChange, name, setName}) => {
    const { pathname } = useLocation()
    return (
        <AntDrawer
            title={`${title} yaratish`}
            placement={'right'}
            closable={true}
            onClose={onClose}
            open={open}
            key={placement}
        >
            <Form
                onSubmitCapture={onSubmitCapture}
                layout={'vertical'}
                form={form}
                initialValues={{
                    layout: 'vertical',
                }}
            >
                {
                    pathname === '/guruhlar' ?
                        <Form.Item label="Guruh nomi">
                            <Input value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Item>
                        : pathname === '/xonalar' ?
                            <Form.Item label="Xona nomi">
                                <Input value={name} onChange={(e) => setName(e.target.value)} />
                            </Form.Item>
                            :
                            <>
                                <Form.Item label="Foydalanuvchi nomi">
                                    <Input value={username} onChange={(e) => setUsername(e.target.value)} />
                                </Form.Item>
                                <Form.Item label="Parol">
                                    <Input value={password} onChange={(e) => setPassword(e.target.value)} />
                                </Form.Item>
                                <Form.Item label="Status">
                                    <Select
                                        defaultValue="Status"
                                        style={{
                                            width: 'full',
                                        }}
                                        onChange={handleChange}
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
                            </>
                }

                <Form.Item>
                    <Button htmlType="submit" type="primary">Submit</Button>
                </Form.Item>
            </Form>
        </AntDrawer>
    )
}

export default Drawer