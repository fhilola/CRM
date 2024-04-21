import React from 'react'
import { Drawer as AntDrawer, Button, Form, Input, Select } from 'antd'

const Drawer = ({ title, placement, onClose, open, form, onSubmitCapture, username, setUsername, password, setPassword, handleChange}) => {
    return (
        <AntDrawer
            title={title}
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
                <Form.Item label="Foydalanuvchi nomi">
                    <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Parol">
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="input placeholder" />
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
                <Form.Item>
                    <Button htmlType="submit" type="primary">Submit</Button>
                </Form.Item>
            </Form>
        </AntDrawer>
    )
}

export default Drawer