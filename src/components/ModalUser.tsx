import { Form, Input, Modal } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { UserInterface } from 'src/models/user'

export type NewUserType = Omit<UserInterface, 'id'> & { id?: number }

type ModalUserProps = {
  visible?: boolean
  onFinished?: (value: NewUserType) => void
  onCancel?: () => void
  user?: UserInterface
}

const ModalUser: React.FC<ModalUserProps> = ({ visible, onFinished, onCancel, user }) => {
  const [company, setCompany] = useState<string>('')

  //   const a = useRef<string>('')
  useEffect(() => {
    console.log('user', user)
    // setCompany(user?.company || '')
    setCompany(user?.company ?? '')
  }, [user])

  const onSubmit = () => {
    const value: NewUserType = {
      ...(user ?? { company: '', contact: '', country: '' }),
      company,
      //   contact: '',
      //   country: '',
    }

    onFinished?.(value)
  }
  return (
    <Modal visible={visible} onCancel={onCancel} onOk={onSubmit}>
      <Form onFinish={onSubmit}>
        <Form.Item label="Company">
          <Input value={company} onChange={text => setCompany(text.target.value)} />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ModalUser
