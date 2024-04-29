import React, { useEffect, useState } from 'react'
import Creation from '../../components/creation-bar/Creation'
import { connect, useSelector } from 'react-redux'
import { createUser } from '../../redux/actions/createAction'
import { Table, Button, Tag } from 'antd';
import { getUsers } from '../../redux/actions/getAction';
const columns = [
  {
    title: 'Username',
    dataIndex: 'username',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (status) => {
      let color = 'green'
      if(status === 'manager'){
        color = 'orange'
      }
      if(status === 'ustoz'){
        color = 'geekblue'
      }
      if(status === 'assist'){
        color = 'red'
      }
      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
      )
    }
  },
  {
    title: 'Address',
    dataIndex: 'address',

  },
];

const Users = (props) => {
  console.log(props);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('')

    const handleChange = (value) => {
        setStatus(value)
    };

  const handleCreate = (e) => {
    e.preventDefault()
    props.createUser({ username, password, status }, 'user/')
  }
  useEffect(() => {
    props.getUsers({username})
  }, [handleCreate])
  const users = useSelector(state => state.getUser.foydalanuvchilar)
  const data = [];
  for (let key in users) {
    const userInfo = {
      key: users[key].id,
      username: users[key].username,
      status: users[key].status
    }
    data.push(userInfo)
  }
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <main>
      <Creation username={username} setUsername={setUsername} password={password} setPassword={setPassword} handleChange={handleChange} onSubmitCapture={handleCreate} title={'Foydalanuvchilar'} count={100} />
      <Button style={{
        marginBottom:'10px'
      }} type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
        Reload
      </Button>
      <span
        style={{
          marginLeft: 8,
        }}
      >
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
      </span>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </main>
  )
}

export default connect(null, { createUser, getUsers })(Users)