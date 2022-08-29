import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import TableUser from 'src/components/TableUser'
import { fake_data, generateId, UserInterface } from 'src/models/user'
import Test from './components/ClassLife'
import logo from './logo.svg'
import './App.css'
import ModalUser, { NewUserType } from './components/ModalUser'

const variable: string = 'hello'

const App = () => {
  const [show, setShow] = useState<boolean>(() => false)
  const [data, setData] = useState<UserInterface[]>(fake_data)
  const [selectedUser, setSelectedUser] = useState<UserInterface>()

  const onClickCreate = () => {
    setSelectedUser(undefined)
    setShow(true)
  }

  const onSubmitForm = (value: NewUserType) => {
    console.log('🚀 ~ file: App.tsx ~ line 21 ~ onSubmitForm ~ value', value)
    setShow(false)

    if (value.id !== undefined) {
      // edit
      setData(s => {
        const index = s.findIndex(i => i.id === value.id)
        if (index >= 0) {
          s[index] = {
            ...s[index],
            ...value,
          }
          return [...s]
        }
        return s
      })
      return
    }

    // create
    setData(s => [...s, { ...value, id: generateId() }])
    // setData(s => {
    //   s.push({ ...value, id: generateId() })
    //   return s
    // })
  }

  const onCancel = () => {
    setShow(false)
  }

  const onDelete = (value: UserInterface) => {
    setData(s => s.filter(i => i.id !== value.id))
  }

  const onEdit = (value: UserInterface) => {
    setSelectedUser(value)
    setShow(true)
  }

  return (
    <div className="container">
      <div>
        <Button onClick={onClickCreate}>Create</Button>
      </div>
      <TableUser onEdit={onEdit} onDeleted={onDelete} data={data} />
      {/* <Test
        show={show}
        title="Xin chao test"
        onClick={() => {
          console.log('aaa')
          setShow(preS => {
            return !preS
          })
        }}
        onClickWithParam={p => {
          console.log('aaaa', p)
        }}
      /> */}
      <ModalUser user={selectedUser} onCancel={onCancel} onFinished={onSubmitForm} visible={show} />
    </div>
  )
}

export default App
